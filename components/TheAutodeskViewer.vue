<script setup>
useHead({
  title: "viewer-aps",
  link: [
    {
      id: "autodesk-styles",
      rel: "stylesheet",
      href: "https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/style.css",
    },
  ],
  script: [
    {
      src: "https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/viewer3D.js",
      defer: true,
      onload: "initAutodeskViewer()",
    },
  ],
});

let globalViewer;

onMounted(() => {
  let viewer = null;
  window.initAutodeskViewer = () => {
    const options = {
      env: "AutodeskProduction",
      getAccessToken: async (onSuccess) => {
        const expiresIn = 3600;
        try {
          const data = await $fetch(`/api/autodesk/auth`, {
            method: "POST",
          });
          onSuccess(data, expiresIn);
        } catch (error) {
          showError({ ...error.response._data });
        }
      },
    };

    Autodesk.Viewing.Initializer(options, () => {
      const viewerContainer = document.getElementById("viewer-container");
      viewer = new Autodesk.Viewing.GuiViewer3D(viewerContainer);
      viewer.start();
      globalViewer = viewer;

      // TODO - Añadir la urn de un modelo subido a US
      const documentId = `urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZHpremtwdnR0ZGJtZzRhaG5nZDhua2drZ21heGNteWFia3dva3d0am40dXd5OW53LWJhc2ljLWFwcC9Tbm93ZG9uJTIwVG93ZXJzJTIwU2FtcGxlJTIwSFZBQy5ydnQ=`;
      Autodesk.Viewing.Document.load(
        documentId,
        onDocumentLoadSuccess,
        onDocumentLoadFailure
      );
    });

    const onDocumentLoadSuccess = (doc) => {
      console.log(
        "onDocumentLoadSuccess(doc): Modelo cargado con éxito: ",
        doc
      );
      const viewables = doc.getRoot().getDefaultGeometry();
      viewer.loadDocumentNode(doc, viewables).then((i) => {
        console.log("Modelo cargado con éxito");
      });
    };

    const onDocumentLoadFailure = (viewerErrorCode) => {
      console.log("Error al cargar el documento: " + viewerErrorCode);
      showError({
        statusCode: 404,
        message: "Error al cargar el documento: " + viewerErrorCode,
      });
    };
  };
});

</script>

<template>
  <div id="viewer-container" />
</template>
