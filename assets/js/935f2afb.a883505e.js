"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"collapsed":false,"type":"category","label":"Getting started","items":[{"type":"link","label":"Installation","href":"/react-native-skia/docs/getting-started/installation","docId":"getting-started/installation"},{"type":"link","label":"Hello World","href":"/react-native-skia/docs/getting-started/hello-world","docId":"getting-started/hello-world"},{"type":"link","label":"Contexts","href":"/react-native-skia/docs/getting-started/contexts","docId":"getting-started/contexts"}],"collapsible":true},{"collapsed":false,"type":"category","label":"Paint","items":[{"type":"link","label":"Overview","href":"/react-native-skia/docs/paint/overview","docId":"paint/overview"},{"type":"link","label":"Properties","href":"/react-native-skia/docs/paint/properties","docId":"paint/properties"}],"collapsible":true},{"type":"link","label":"Group","href":"/react-native-skia/docs/group","docId":"group"},{"collapsed":false,"type":"category","label":"Image","items":[{"type":"link","label":"Image","href":"/react-native-skia/docs/images","docId":"image"},{"type":"link","label":"SVG","href":"/react-native-skia/docs/images-svg","docId":"image-svg"}],"collapsible":true},{"collapsed":false,"type":"category","label":"Text","items":[{"type":"link","label":"Fonts","href":"/react-native-skia/docs/text/fonts","docId":"text/fonts"},{"type":"link","label":"Text","href":"/react-native-skia/docs/text/text","docId":"text/text"}],"collapsible":true},{"collapsed":false,"type":"category","label":"Shaders","items":[{"type":"link","label":"Language","href":"/react-native-skia/docs/shaders/overview","docId":"shaders/language"},{"type":"link","label":"Images","href":"/react-native-skia/docs/shaders/images","docId":"shaders/images"},{"type":"link","label":"Gradients","href":"/react-native-skia/docs/shaders/gradients","docId":"shaders/gradients"},{"type":"link","label":"Perlin Noise","href":"/react-native-skia/docs/shaders/perlin-noise","docId":"shaders/perlin-noise"},{"type":"link","label":"Blending and Colors","href":"/react-native-skia/docs/shaders/colors","docId":"shaders/colors"}],"collapsible":true},{"collapsed":false,"type":"category","label":"Effects","items":[{"type":"link","label":"Mask Filters","href":"/react-native-skia/docs/mask-filters","docId":"mask-filters"},{"type":"link","label":"Color Filters","href":"/react-native-skia/docs/color-filters","docId":"color-filters"},{"type":"link","label":"Image Filters","href":"/react-native-skia/docs/image-filters","docId":"image-filters"},{"type":"link","label":"Path Effects","href":"/react-native-skia/docs/path-effects","docId":"path-effects"}],"collapsible":true},{"collapsed":false,"type":"category","label":"Shapes","items":[{"type":"link","label":"Path","href":"/react-native-skia/docs/shapes/path","docId":"shapes/path"},{"type":"link","label":"Polygons","href":"/react-native-skia/docs/shapes/polygons","docId":"shapes/polygons"},{"type":"link","label":"Ellipses","href":"/react-native-skia/docs/shapes/ellipses","docId":"shapes/ellipses"}],"collapsible":true},{"collapsed":false,"type":"category","label":"Animations","items":[{"type":"link","label":"Overview","href":"/react-native-skia/docs/animations/overview","docId":"animations/overview"},{"type":"link","label":"Reanimated","href":"/react-native-skia/docs/animations/reanimated","docId":"animations/reanimated"}],"collapsible":true}]},"docs":{"animations/overview":{"id":"animations/overview","title":"Animations","description":"React Native Skia supports Animations through properties. Each property in all our declarative elements can be animated by providing a callback that calculates the property value instead of the value directly.","sidebar":"tutorialSidebar"},"animations/reanimated":{"id":"animations/reanimated","title":"Reanimated","description":"This library works well with other animation providers, and it is possible to use it with react-native-reanimated.","sidebar":"tutorialSidebar"},"color-filters":{"id":"color-filters","title":"Color Filters","description":"Color Matrix","sidebar":"tutorialSidebar"},"getting-started/contexts":{"id":"getting-started/contexts","title":"Contexts","description":"React Native Skia is using its own React renderer.","sidebar":"tutorialSidebar"},"getting-started/hello-world":{"id":"getting-started/hello-world","title":"Hello World","description":"React Native Skia has two APIs: a declarative API available as a React Native Renderer and an imperative API backed by JSI.","sidebar":"tutorialSidebar"},"getting-started/installation":{"id":"getting-started/installation","title":"Installation","description":"React Native Skia brings the Skia Graphics Library to React Native.","sidebar":"tutorialSidebar"},"group":{"id":"group","title":"Group","description":"The Group component is an important construct in React Native Skia.","sidebar":"tutorialSidebar"},"image":{"id":"image","title":"Image","description":"Images can be draw by specifying the output rectangle and how the image should fit into that rectangle.","sidebar":"tutorialSidebar"},"image-filters":{"id":"image-filters","title":"Image Filters","description":"Image filters are effects that operate on all the color bits of pixels that make up an image.","sidebar":"tutorialSidebar"},"image-svg":{"id":"image-svg","title":"Image SVG","description":"Draw an SVG","sidebar":"tutorialSidebar"},"mask-filters":{"id":"mask-filters","title":"Mask Filters","description":"Mask filters are effects that manipulate the geometry and alpha channel of graphical objects.","sidebar":"tutorialSidebar"},"paint/overview":{"id":"paint/overview","title":"Paint","description":"Anytime you draw something in Skia and want to specify what color it is, or how it blends with the background, or what style to draw it in, you specify those attributes in a paint.","sidebar":"tutorialSidebar"},"paint/properties":{"id":"paint/properties","title":"Paint Properties","description":"Below are the properties of a Paint component.","sidebar":"tutorialSidebar"},"path-effects":{"id":"path-effects","title":"Path Effects","description":"Discrete Path Effect","sidebar":"tutorialSidebar"},"shaders/colors":{"id":"shaders/colors","title":"Blending and Colors","description":"Blend Shader","sidebar":"tutorialSidebar"},"shaders/gradients":{"id":"shaders/gradients","title":"Gradients","description":"Common Properties","sidebar":"tutorialSidebar"},"shaders/images":{"id":"shaders/images","title":"Image Shaders","description":"Image","sidebar":"tutorialSidebar"},"shaders/language":{"id":"shaders/language","title":"Shading Language","description":"Skia provides a shading language.","sidebar":"tutorialSidebar"},"shaders/perlin-noise":{"id":"shaders/perlin-noise","title":"Perlin Noise Shaders","description":"Fractal Perlin Noise Shader","sidebar":"tutorialSidebar"},"shapes/ellipses":{"id":"shapes/ellipses","title":"Ellipses","description":"Circle","sidebar":"tutorialSidebar"},"shapes/path":{"id":"shapes/path","title":"Path","description":"In Skia, paths are semantically identical to SVG Paths.","sidebar":"tutorialSidebar"},"shapes/polygons":{"id":"shapes/polygons","title":"Polygons","description":"Rect","sidebar":"tutorialSidebar"},"text/fonts":{"id":"text/fonts","title":"Fonts","description":"By default all the fonts available within your app are available in your Canvas. For instance, you can write the following.","sidebar":"tutorialSidebar"},"text/text":{"id":"text/text","title":"Text","description":"The text component can be used to draw a simple text.","sidebar":"tutorialSidebar"}}}')}}]);