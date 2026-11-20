// Readonly
interface Point {
  readonly x: number;
  readonly y: number;
}
const point: Point = {
  x: 20,
  y: 22,
};
console.log(point);
//point.x=99
console.log(point);
/* 
{ x: 20, y: 22 }
{ x: 20, y: 22 }
*/
