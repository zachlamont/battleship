(()=>{"use strict";var t={};function e(t){let e=0,r=!1;return{length:t,get hits(){return e},get isSunk(){return r},hit:function(){e++,e===t&&(r=!0)}}}function r(){const t=Array.from(Array(10),(()=>Array(10).fill(null))),e=[];return{board:t,placeShip:function(r,n,o,l){if(n<0||n>=10||o<0||o>=10)throw new Error("Invalid coordinates");if(l){if(o+r.length>10)throw new Error("Ship placement out of bounds");for(let e=0;e<r.length;e++)if(null!==t[o+e][n])throw new Error("Ship placement overlap");for(let e=0;e<r.length;e++)t[o+e][n]={ship:r,isHit:!1}}else{if(n+r.length>10)throw new Error("Ship placement out of bounds");for(let e=0;e<r.length;e++)if(null!==t[o][n+e])throw new Error("Ship placement overlap");for(let e=0;e<r.length;e++)t[o][n+e]={ship:r,isHit:!1}}e.push(r)},receiveAttack:function(e,r){if(e<0||e>=10||r<0||r>=10)throw new Error("Invalid coordinates");const n=t[r][e];return null!==n&&(n.isHit=!0,n.ship.hit(),!0)},areAllShipsSunk:function(){return e.every((t=>t.isSunk))}}}t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),console.log("mazda".split("").reverse().join(""));const n=r(),o=r();n.placeShip(e(5),0,0,!0),n.placeShip(e(4),1,0,!0),n.placeShip(e(3),2,0,!0),n.placeShip(e(3),3,0,!0),n.placeShip(e(2),4,0,!0),o.placeShip(e(5),5,0,!0),o.placeShip(e(4),6,0,!0),o.placeShip(e(3),7,0,!0),o.placeShip(e(3),8,0,!0),o.placeShip(e(2),9,0,!0);const l={attack(t,e,r){t.receiveAttack(e,r)}},i={attack(t){let e=!1;for(;!e;){const r=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());t.board[n]&&t.board[n][r]&&!t.board[n][r].isHit&&(console.log(t.board[n][r]),t.receiveAttack(r,n),e=!0)}}};let a=l;function c(){a=a===l?i:l}const p=document.getElementById("player-board"),h=document.getElementById("computer-board");function s(t,e){e.innerHTML="";for(let r=0;r<t.board.length;r++)for(let n=0;n<t.board[r].length;n++){const i=document.createElement("div");i.classList.add("square"),null!==t.board[r][n]&&(t.board[r][n].isHit?(i.classList.add("hit"),i.textContent="hit"):(i.classList.add("ship"),i.textContent="ship")),i.addEventListener("click",(()=>{a===l&&(a.attack(o,n,r),s(o,h),c(),d())})),e.appendChild(i)}}function d(){n.areAllShipsSunk()?alert("Computer wins!"):o.areAllShipsSunk()?alert("Player wins!"):a===i&&(console.log(n.board),a.attack(n),s(n,p),c(),d())}s(n,p),s(o,h),d()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGNBQWMsT0FDdEN6QyxFQUFPMEMsVUFBVUMsSUFBSSxVQUNLLE9BQXRCekQsRUFBTUEsTUFBTVUsR0FBRzRDLEtBQ2J0RCxFQUFNQSxNQUFNVSxHQUFHNEMsR0FBRzNDLE9BQ3BCRyxFQUFPMEMsVUFBVUMsSUFBSSxPQUNyQjNDLEVBQU80QyxZQUFjLFFBRXJCNUMsRUFBTzBDLFVBQVVDLElBQUksUUFDckIzQyxFQUFPNEMsWUFBYyxTQUl6QjVDLEVBQU82QyxpQkFBaUIsU0FBUyxLQUMzQmQsSUFBa0JQLElBQ3BCTyxFQUFjTixPQUFPRixFQUFlaUIsRUFBRzVDLEdBQ3ZDeUMsRUFBWWQsRUFBZWEsR0FDM0JKLElBQ0FjLElBQ0YsSUFFRlIsRUFBUVMsWUFBWS9DLEVBQ3RCLENBRUosQ0FFQSxTQUFTOEMsSUFDSHhCLEVBQVlyQixrQkFDZCtDLE1BQU0sa0JBSUp6QixFQUFjdEIsa0JBQ2hCK0MsTUFBTSxnQkFJSmpCLElBQWtCTCxJQUNwQlQsUUFBUUMsSUFBSUksRUFBWXBDLE9BQ3hCNkMsRUFBY04sT0FBT0gsR0FDckJlLEVBQVlmLEVBQWFXLEdBQ3pCRCxJQUNBYyxJQUVKLENBRUFULEVBQVlmLEVBQWFXLEdBQ3pCSSxFQUFZZCxFQUFlYSxHQUMzQlUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsImZ1bmN0aW9uIHJldmVyc2VTdHJpbmcoc3RyKSB7XG4gIHJldHVybiBzdHIuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIik7XG59XG5cbmNvbnNvbGUubG9nKHJldmVyc2VTdHJpbmcoXCJtYXpkYVwiKSk7XG5cbi8vU0hJUCBGQUNUT1JZXG5cbmZ1bmN0aW9uIHNoaXAobGVuZ3RoKSB7XG4gIGxldCBfaGl0cyA9IDA7XG4gIGxldCBpc1N1bmsgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgX2hpdHMrKztcbiAgICBpZiAoX2hpdHMgPT09IGxlbmd0aCkge1xuICAgICAgaXNTdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxlbmd0aCxcbiAgICBnZXQgaGl0cygpIHtcbiAgICAgIHJldHVybiBfaGl0cztcbiAgICB9LFxuICAgIGdldCBpc1N1bmsoKSB7XG4gICAgICByZXR1cm4gaXNTdW5rO1xuICAgIH0sXG4gICAgaGl0LFxuICB9O1xufVxuXG4vL0dBTUVCT0FSRCBGQUNUT1JZXG5cbmZ1bmN0aW9uIGdhbWVib2FyZCgpIHtcbiAgY29uc3QgYm9hcmQgPSBBcnJheS5mcm9tKEFycmF5KDEwKSwgKCkgPT4gQXJyYXkoMTApLmZpbGwobnVsbCkpO1xuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwLCB4LCB5LCBpc1ZlcnRpY2FsKSB7XG4gICAgaWYgKHggPCAwIHx8IHggPj0gMTAgfHwgeSA8IDAgfHwgeSA+PSAxMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb29yZGluYXRlc1wiKTtcbiAgICB9XG5cbiAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgaWYgKHkgKyBzaGlwLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNoaXAgcGxhY2VtZW50IG91dCBvZiBib3VuZHNcIik7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYm9hcmRbeSArIGldW3hdICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2hpcCBwbGFjZW1lbnQgb3ZlcmxhcFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbeSArIGldW3hdID0geyBzaGlwOiBzaGlwLCBpc0hpdDogZmFsc2UgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHggKyBzaGlwLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNoaXAgcGxhY2VtZW50IG91dCBvZiBib3VuZHNcIik7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYm9hcmRbeV1beCArIGldICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2hpcCBwbGFjZW1lbnQgb3ZlcmxhcFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbeV1beCArIGldID0geyBzaGlwOiBzaGlwLCBpc0hpdDogZmFsc2UgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzaGlwcy5wdXNoKHNoaXApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgaWYgKHggPCAwIHx8IHggPj0gMTAgfHwgeSA8IDAgfHwgeSA+PSAxMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb29yZGluYXRlc1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCBzcXVhcmUgPSBib2FyZFt5XVt4XTtcbiAgICBpZiAoc3F1YXJlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNxdWFyZS5pc0hpdCA9IHRydWU7XG4gICAgICBzcXVhcmUuc2hpcC5oaXQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFyZUFsbFNoaXBzU3VuaygpIHtcbiAgICByZXR1cm4gc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKTtcbiAgfVxuXG4gIHJldHVybiB7IGJvYXJkLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIGFyZUFsbFNoaXBzU3VuayB9O1xufVxuXG5leHBvcnQgeyByZXZlcnNlU3RyaW5nLCBzaGlwLCBnYW1lYm9hcmQgfTtcblxuLy9NQUlOIEdBTUUgTE9PUFxuXG5jb25zdCBwbGF5ZXJCb2FyZCA9IGdhbWVib2FyZCgpO1xuY29uc3QgY29tcHV0ZXJCb2FyZCA9IGdhbWVib2FyZCgpO1xuXG5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAoc2hpcCg1KSwgMCwgMCwgdHJ1ZSk7XG5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAoc2hpcCg0KSwgMSwgMCwgdHJ1ZSk7XG5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAoc2hpcCgzKSwgMiwgMCwgdHJ1ZSk7XG5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAoc2hpcCgzKSwgMywgMCwgdHJ1ZSk7XG5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAoc2hpcCgyKSwgNCwgMCwgdHJ1ZSk7XG5cbmNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKHNoaXAoNSksIDUsIDAsIHRydWUpO1xuY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoc2hpcCg0KSwgNiwgMCwgdHJ1ZSk7XG5jb21wdXRlckJvYXJkLnBsYWNlU2hpcChzaGlwKDMpLCA3LCAwLCB0cnVlKTtcbmNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKHNoaXAoMyksIDgsIDAsIHRydWUpO1xuY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoc2hpcCgyKSwgOSwgMCwgdHJ1ZSk7XG5cbmNvbnN0IHBsYXllciA9IHtcbiAgYXR0YWNrKGdhbWVib2FyZCwgeCwgeSkge1xuICAgIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICB9LFxufTtcblxuY29uc3QgY29tcHV0ZXIgPSB7XG4gIGF0dGFjayhnYW1lYm9hcmQpIHtcbiAgICBsZXQgYXR0YWNrQ29tcGxldGVkID0gZmFsc2U7XG4gICAgd2hpbGUgKCFhdHRhY2tDb21wbGV0ZWQpIHtcbiAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgaWYgKFxuICAgICAgICBnYW1lYm9hcmQuYm9hcmRbeV0gJiZcbiAgICAgICAgZ2FtZWJvYXJkLmJvYXJkW3ldW3hdICYmXG4gICAgICAgICFnYW1lYm9hcmQuYm9hcmRbeV1beF0uaXNIaXRcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZyhnYW1lYm9hcmQuYm9hcmRbeV1beF0pO1xuICAgICAgICBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgYXR0YWNrQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG59O1xuXG5sZXQgY3VycmVudFBsYXllciA9IHBsYXllcjtcblxuZnVuY3Rpb24gc3dpdGNoVHVybnMoKSB7XG4gIGlmIChjdXJyZW50UGxheWVyID09PSBwbGF5ZXIpIHtcbiAgICBjdXJyZW50UGxheWVyID0gY29tcHV0ZXI7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFBsYXllciA9IHBsYXllcjtcbiAgfVxufVxuXG5jb25zdCBwbGF5ZXJCb2FyZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllci1ib2FyZFwiKTtcbmNvbnN0IGNvbXB1dGVyQm9hcmRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wdXRlci1ib2FyZFwiKTtcblxuZnVuY3Rpb24gcmVuZGVyQm9hcmQoYm9hcmQsIGVsZW1lbnQpIHtcbiAgLy8gQ2xlYXIgdGhlIGJvYXJkIGJlZm9yZSByZW5kZXJpbmdcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVcIik7XG4gICAgICBpZiAoYm9hcmQuYm9hcmRbaV1bal0gIT09IG51bGwpIHtcbiAgICAgICAgaWYgKGJvYXJkLmJvYXJkW2ldW2pdLmlzSGl0KSB7XG4gICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgICAgc3F1YXJlLnRleHRDb250ZW50ID0gXCJoaXRcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgc3F1YXJlLnRleHRDb250ZW50ID0gXCJzaGlwXCI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50UGxheWVyID09PSBwbGF5ZXIpIHtcbiAgICAgICAgICBjdXJyZW50UGxheWVyLmF0dGFjayhjb21wdXRlckJvYXJkLCBqLCBpKTtcbiAgICAgICAgICByZW5kZXJCb2FyZChjb21wdXRlckJvYXJkLCBjb21wdXRlckJvYXJkRWxlbWVudCk7XG4gICAgICAgICAgc3dpdGNoVHVybnMoKTtcbiAgICAgICAgICBwbGF5R2FtZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcGxheUdhbWUoKSB7XG4gIGlmIChwbGF5ZXJCb2FyZC5hcmVBbGxTaGlwc1N1bmsoKSkge1xuICAgIGFsZXJ0KFwiQ29tcHV0ZXIgd2lucyFcIik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNvbXB1dGVyQm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICBhbGVydChcIlBsYXllciB3aW5zIVwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY3VycmVudFBsYXllciA9PT0gY29tcHV0ZXIpIHtcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXJCb2FyZC5ib2FyZCk7XG4gICAgY3VycmVudFBsYXllci5hdHRhY2socGxheWVyQm9hcmQpO1xuICAgIHJlbmRlckJvYXJkKHBsYXllckJvYXJkLCBwbGF5ZXJCb2FyZEVsZW1lbnQpO1xuICAgIHN3aXRjaFR1cm5zKCk7XG4gICAgcGxheUdhbWUoKTtcbiAgfVxufVxuXG5yZW5kZXJCb2FyZChwbGF5ZXJCb2FyZCwgcGxheWVyQm9hcmRFbGVtZW50KTtcbnJlbmRlckJvYXJkKGNvbXB1dGVyQm9hcmQsIGNvbXB1dGVyQm9hcmRFbGVtZW50KTtcbnBsYXlHYW1lKCk7XG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJzaGlwIiwibGVuZ3RoIiwiX2hpdHMiLCJpc1N1bmsiLCJoaXRzIiwiaGl0IiwiZ2FtZWJvYXJkIiwiYm9hcmQiLCJBcnJheSIsImZyb20iLCJmaWxsIiwic2hpcHMiLCJwbGFjZVNoaXAiLCJ4IiwieSIsImlzVmVydGljYWwiLCJFcnJvciIsImkiLCJpc0hpdCIsInB1c2giLCJyZWNlaXZlQXR0YWNrIiwic3F1YXJlIiwiYXJlQWxsU2hpcHNTdW5rIiwiZXZlcnkiLCJkIiwiZXhwb3J0cyIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImNvbnNvbGUiLCJsb2ciLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwicGxheWVyQm9hcmQiLCJjb21wdXRlckJvYXJkIiwicGxheWVyIiwiYXR0YWNrIiwiY29tcHV0ZXIiLCJhdHRhY2tDb21wbGV0ZWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjdXJyZW50UGxheWVyIiwic3dpdGNoVHVybnMiLCJwbGF5ZXJCb2FyZEVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29tcHV0ZXJCb2FyZEVsZW1lbnQiLCJyZW5kZXJCb2FyZCIsImVsZW1lbnQiLCJpbm5lckhUTUwiLCJqIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXlHYW1lIiwiYXBwZW5kQ2hpbGQiLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=