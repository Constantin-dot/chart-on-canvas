export function toDate(timestamp) {
  const shortMonths = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const shortDays = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ];
  const date = new Date(timestamp);
  return `${shortMonths[date.getMonth()]} ${date.getDate(timestamp)}`
};

export function isOver(mouse, x, length, dWidth) {
  if (!mouse) {
    return false;
  }
  const width = dWidth / length;
  return Math.abs(x - mouse.x) < width / 2;
};

export function line(ctx, coords, { color }) {
  ctx.beginPath() // начало рисования
  ctx.setLineDash([5, 2]); // параметры штриха линии
  ctx.lineWidth = 4; // толщина линии
  ctx.strokeStyle = color; // цвет линии
  for (const [x, y] of coords) {
    ctx.lineTo(x, y); // проставляем точки
  }
  ctx.stroke(); //объединяем точки линиями
  ctx.closePath(); // окончание рисования
};

export function circle(ctx, [x, y], color, radius) {
  ctx.beginPath();
  ctx.setLineDash([1, 0]);
  ctx.strokeStyle = color;
  ctx.fillStyle = '#fff';
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};

export function computeBoundaries({ columns, types }) {
  let min;
  let max;

  columns.forEach(col => {
    if (types[col[0]] !== 'line') {
      return;
    }

    if (typeof min !== 'number') min = col[1];
    if (typeof max !== 'number') max = col[1];

    if (min > col[1]) min = col[1];
    if (max < col[1]) max = col[1];

    for (let i = 2; i < col.length; i++) {
      if (min > col[i]) min = col[i];
      if (max < col[i]) max = col[i];
    }
  });

  return [min, max];
};

export function css(el, styles = {}) {
  Object.assign(el.style, styles);
};