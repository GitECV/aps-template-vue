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
    createBaseExtension();
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
      loadBaseExtension();
      const viewerContainer = document.getElementById("viewer-container");
      viewer = new Autodesk.Viewing.GuiViewer3D(viewerContainer);
      viewer.start();
      viewer.loadExtension("BaseExtension");
      globalViewer = viewer;

      // TODO - Añadir la urn de un modelo subido a US
      const documentId = `urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZHpremtwdnR0ZGJtZzRhaG5nZDhua2drZ21heGNteWFia3dva3d0am40dXd5OW53LWJhc2ljLWFwcC9Tbm93ZG9uJTIwVG93ZXJzJTIwU2FtcGxlJTIwSFZBQy5ydnQ=`;
      Autodesk.Viewing.Document.load(
        documentId,
        onDocumentLoadSuccess,
        onDocumentLoadFailure
      );
    });

    const loadBaseExtension = () => {
      class BaseExtension extends window.Autodesk.Viewing.Extension {
        constructor(viewer, options) {
          super(viewer, options);
        }

        load() {
          console.log("BaseExtension loaded");
          return true;
        }

        unload() {
          console.log("BaseExtension unloaded");
          return true;
        }
      }

      window.Autodesk.Viewing.theExtensionManager.registerExtension(
        "BaseExtension",
        BaseExtension
      );
    };

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

const createBaseExtension = () => {
  class BaseExtension extends window.Autodesk.Viewing.Extension {
    constructor(viewer, options) {
      super(viewer, options);
      this._onObjectTreeCreated = (ev) => this.onModelLoaded(ev.model);
      this._onSelectionChanged = (ev) =>
        this.onSelectionChanged(ev.model, ev.dbIdArray);
      this._onIsolationChanged = (ev) =>
        this.onIsolationChanged(ev.model, ev.nodeIdArray);
    }

    load() {
      this.viewer.addEventListener(
        Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,
        this._onObjectTreeCreated
      );
      this.viewer.addEventListener(
        Autodesk.Viewing.SELECTION_CHANGED_EVENT,
        this._onSelectionChanged
      );
      this.viewer.addEventListener(
        Autodesk.Viewing.ISOLATE_EVENT,
        this._onIsolationChanged
      );
      console.log("BaseExtension loaded");
      return true;
    }

    unload() {
      this.viewer.removeEventListener(
        Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,
        this._onObjectTreeCreated
      );
      this.viewer.removeEventListener(
        Autodesk.Viewing.SELECTION_CHANGED_EVENT,
        this._onSelectionChanged
      );
      this.viewer.removeEventListener(
        Autodesk.Viewing.ISOLATE_EVENT,
        this._onIsolationChanged
      );
      console.log("BaseExtension unloaded");
      return true;
    }
    async onModelLoaded(model) {
      // this.overrideFirstPersonButtonAction()
      // const tree = await this.getModelStructure(model);
      // console.log("Model Object Tree: ", tree);
      this.removeFirstPersonButton();
      console.log("ESTE ES EL MODEL: ", model);
    }

    onSelectionChanged(model, dbids) {}

    onIsolationChanged(model, dbids) {}

    removeFirstPersonButton() {
      this.viewer.toolbar
        .getControl("navTools")
        .removeControl("toolbar-bimWalkTool");
    }
  }

  window.Autodesk.Viewing.theExtensionManager.registerExtension(
    "BaseExtension",
    BaseExtension
  );
};
</script>
<template>
  <div id="viewer-container" class="viewer-container" />
</template>

<style scoped>
.viewer-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 250px; /* Adjust this value based on your sidebar width */
  right: 0;
  overflow: hidden;
}
</style>
