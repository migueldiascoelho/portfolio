// StarField.jsx
import React, { useEffect } from 'react';
import './StarField.css';

const StarField = () => {
  let start = new Date().getTime();

  const originPosition = { x: 0, y: 0 };

  const last = {
    starTimestamp: start,
    starPosition: originPosition,
    mousePosition: originPosition,
  };

  const config = {
    starAnimationDuration: 1000,
    minimumTimeBetweenStars: 100,
    minimumDistanceBetweenStars: 20,
    glowDuration: 20,
    maximumGlowPointSpacing: 10,
    animations: ["fall-1", "fall-2", "fall-3"],
  };

  let count = 0;

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const selectRandom = (items) => items[rand(0, items.length - 1)];

  const withUnit = (value, unit) => `${value}${unit}`;
  const px = (value) => withUnit(value, "px");
  const ms = (value) => withUnit(value, "ms");

  const calcDistance = (a, b) => {
    const diffX = b.x - a.x,
      diffY = b.y - a.y;

    return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  };

  const calcElapsedTime = (start, end) => end - start;

  const appendElement = (element) => document.body.appendChild(element);
  const removeElement = (element, delay) => setTimeout(() => document.body.removeChild(element), delay);

  const createSquare = (position) => {
    const square = document.createElement("div");
    const sizes = ["0.3rem", "0.4rem", "0.5rem", "0.6rem", "0.7rem"];
    const colors = [
      "#000000", // Black
      "#333333", // Charcoal Gray
      "#696969", // Dim Gray
      "#808080", // Gray
      "#A9A9A9", // Dark Gray
      "#C0C0C0", // Silver
      "#D3D3D3", // Light Gray
      "#DCDCDC", // Gainsboro
      "#F5F5F5", // White Smoke
      "#222222"  
    ];
    

    square.className = "square";
    const size = selectRandom(sizes);
    const color = selectRandom(colors);
    square.style.left = px(position.x);
    square.style.top = px(position.y);
    square.style.width = size;
    square.style.height = size;
    square.style.backgroundColor = color;
    square.style.animationName = config.animations[count++ % 3];
    square.style.animationDuration = ms(config.starAnimationDuration);

    appendElement(square);


    removeElement(square, config.starAnimationDuration);
  };

  const createGlowPoint = (position) => {
    const glow = document.createElement("div");

    glow.className = "glow-point";

    glow.style.left = px(position.x);
    glow.style.top = px(position.y);

    appendElement(glow);

    removeElement(glow, config.glowDuration);
  };

  const determinePointQuantity = (distance) =>
    Math.max(Math.floor(distance / config.maximumGlowPointSpacing), 1);

  const createGlow = (last, current) => {
    const distance = calcDistance(last, current),
      quantity = determinePointQuantity(distance);

    const dx = (current.x - last.x) / quantity,
      dy = (current.y - last.y) / quantity;

    Array.from(Array(quantity)).forEach((_, index) => {
      const x = last.x + dx * index,
        y = last.y + dy * index;

      createGlowPoint({ x, y });
    });
  };

  const updateLastSquare = (position) => {
    last.starTimestamp = new Date().getTime();
    last.starPosition = position;
  };

  const updateLastMousePosition = (position) => (last.mousePosition = position);

  const adjustLastMousePosition = (position) => {
    if (last.mousePosition.x === 0 && last.mousePosition.y === 0) {
      last.mousePosition = position;
    }
  };

  useEffect(() => {
    const handleOnMove = (e) => {
      const mousePosition = { x: e.clientX, y: e.clientY };

      adjustLastMousePosition(mousePosition);

      const now = new Date().getTime(),
        hasMovedFarEnough =
          calcDistance(last.starPosition, mousePosition) >= config.minimumDistanceBetweenStars,
        hasBeenLongEnough = calcElapsedTime(last.starTimestamp, now) > config.minimumTimeBetweenStars;

      if (hasMovedFarEnough || hasBeenLongEnough) {
        createSquare(mousePosition);

        updateLastSquare(mousePosition);
      }

      createGlow(last.mousePosition, mousePosition);

      updateLastMousePosition(mousePosition);
    };

    window.addEventListener('mousemove', handleOnMove);
    window.addEventListener('touchmove', (e) => handleOnMove(e.touches[0]));

    return () => {
      window.removeEventListener('mousemove', handleOnMove);
      window.removeEventListener('touchmove', (e) => handleOnMove(e.touches[0]));
    };
  }, []);

  return null; // Since there's no specific HTML to render
};

export default StarField;
