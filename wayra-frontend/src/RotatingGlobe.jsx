import { useEffect, useRef } from "react";

export default function RotatingGlobe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let rotation = 0;

    canvas.width = 400;
    canvas.height = 400;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 130;

      // Glow effect
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.7,
        centerX,
        centerY,
        radius * 1.3,
      );
      gradient.addColorStop(0, "rgba(212, 175, 55, 0.2)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.3, 0, Math.PI * 2);
      ctx.fill();

      // Globe base
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(10, 15, 30, 0.9)";
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = "rgba(212, 175, 55, 0.6)";
      ctx.stroke();

      // Grid lines
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.clip();

      ctx.strokeStyle = "rgba(212, 175, 55, 0.25)";
      ctx.lineWidth = 1;

      for (let i = 0; i < 6; i++) {
        const angle = rotation + (i * Math.PI) / 3;
        ctx.beginPath();
        ctx.ellipse(
          centerX,
          centerY,
          radius * Math.cos(angle),
          radius,
          0,
          0,
          Math.PI * 2,
        );
        ctx.stroke();
      }

      for (let i = -2; i <= 2; i++) {
        const yOffset = i * 40;
        const currentRadius = Math.sqrt(radius * radius - yOffset * yOffset);
        if (!isNaN(currentRadius)) {
          ctx.beginPath();
          ctx.ellipse(
            centerX,
            centerY + yOffset,
            currentRadius,
            12,
            0,
            0,
            Math.PI * 2,
          );
          ctx.stroke();
        }
      }

      ctx.restore();
      rotation += 0.006;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <canvas ref={canvasRef} style={{ width: "350px", height: "350px" }} />
    </div>
  );
}
