function uiMessageHandler(message) {
  console.log('Message from UI:', message);
  // Fetch UI messages
}

figma.showUI(__html__);

figma.ui.onmessage = uiMessageHandler;
