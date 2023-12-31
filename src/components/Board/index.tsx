import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { activeMenuItemState } from "@/store/menu/menuSlice";
import { useEffect, useRef, useLayoutEffect } from "react";

const Board = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldDrawRef = useRef<boolean>(false);
  const activeMenuItem = useAppSelector(activeMenuItemState);
  const { color, size } = useAppSelector(
    (state) => state.toolbar[activeMenuItem]
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const changeConfig = () => {
      if (context) {
        context.strokeStyle = color ? color : "black";
        context.lineWidth = size ? size : 2;
      }
    };
    changeConfig();
  }, [color, size]);
  //before browser paint
  useLayoutEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const beginPath = (x: number, y: number) => {
      context?.beginPath();
      context?.moveTo(x, y);
    };

    const drawPath = (x: number, y: number) => {
      context?.lineTo(x, y);
      context?.stroke();
    };

    const handleMouseDown = (e: MouseEvent) => {
      shouldDrawRef.current = true;
      beginPath(e.clientX, e.clientY);
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (!shouldDrawRef.current) return;
      drawPath(e.clientX, e.clientY);
    };
    const handleMouseUp = () => {
      shouldDrawRef.current = false;
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  return <canvas ref={canvasRef}>index</canvas>;
};

export default Board;
