import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

const componentProps = {
  activeTab: "Shape",
  animate: "on",
  brightness: 1.1,
  cAzimuthAngle: 180,
  cPolarAngle: 90,
  cameraZoom: 1,
  cDistance: 3.6,
  color1: "rgb(61, 197, 255)",
  color2: "rgb(15, 31, 255)",
  color3: "rgb(255, 255, 255)",
  control: "props",
  envPreset: "lobby",
  grain: "on",
  lightType: "3d",
  uDensity: 1,
  uStrength: 1.9,
  pixelDensity: 1.4,
  positionX: -1.4,
  positionY: 0,
  positionZ: 0,
  reflection: 1,
  rotationX: 0,
  rotationY: 10,
  rotationZ: 50,
  shader: "defaults",
  toggleAxis: !1,
  type: "waterPlane",
  uAmplitude: 0.1,
  uSpeed: 0.4,
  uTime: 0,
  width: "100%",
  zoomOut: !1,
};

function App() {
  return (
    <>
      <ShaderGradientCanvas
        pointerEvents="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100%",
          height: "100%",
        }}
      >
        <ShaderGradient {...componentProps} />
      </ShaderGradientCanvas>

      <div
        style={{
          padding: "8px 12px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(36, 80, 255, 0.86)",
          backdropFilter: "blur(5px)",
          cursor: "pointer",
          gap: "8px",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: "500",
        }}
      >
        <img
          style={{ width: "24px", height: "24px" }}
          src="/icon_01.webp"
          alt="logo"
        />
        Create AI Workflows and Agents based on any LLMs
        <img
          style={{ width: "16px", height: "16px" }}
          src="/icon_02.svg"
          alt="logo"
        />
      </div>
      <header
        style={{
          padding: "24px 64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          style={{ width: "96px", height: "40px" }}
          src="/dify_logo_white.png"
          alt="logo"
        />
        <nav
          style={{
            display: "flex",
            gap: "2px",
            border: "0.5px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "24px",
            backdropFilter: "blur(8px)",
            boxShadow:
              "rgba(0, 0, 0, 0.082) 0px 0px 0px 0px, rgba(0, 0, 0, 0.075) 0px 0px 0px 0px, rgba(0, 0, 0, 0.035) 0px 0px 0px 0px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            padding: "4px 12px",
            color: "white",
            fontWeight: "500",
          }}
        >
          <a style={{ padding: "10px 12px" }}>Product</a>
          <a style={{ padding: "10px 12px" }}>Pricing</a>
          <a style={{ padding: "10px 12px" }}>Docs</a>
          <a style={{ padding: "10px 12px" }}>Blog</a>
        </nav>
        <div style={{ display: "flex", gap: "16px" }}>
          <a style={{ color: "white" }} href="https://github.com/leyen-me/demo-fluid-background">
            Github
          </a>
        </div>
      </header>
      <main
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "128px 0",
        }}
      >
        <h1 style={{ fontSize: "64px", fontWeight: "700", color: "white" }}>
          The Innovation Engine for GenAI
          <br /> Applications
        </h1>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "400",
            color: "rgba(255, 255, 255, 0.8)",
            marginTop: "16px",
          }}
        >
          Dify is an open-source LLM app development platform. Orchestrate LLM
          apps from agents to complex AI workflows, with an RAG engine. More
          production-ready than LangChain.
        </p>
      </main>
    </>
  );
}
export default App;
