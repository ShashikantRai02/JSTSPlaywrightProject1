// Readonly
interface Point {
  x: number;
  y: number;
}
const point: Point = {
  x: 11,
  y: 12,
};
console.log(point);
point.x = 15;
console.log(point);
/* 

{ x: 11, y: 12 }
{ x: 15, y: 12 }
*/
