import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";

class Canves extends Component {
  state = {
    color: "black",
    width: 400,
    height: 400,
    brushRadius: 5,
    lazyRadius: 12
  };
  
  render() {
    return (
      <div>
                <div>
          <button
            onClick={() => {
              localStorage.setItem(
                "savedDrawing",
                this.saveableCanvas.getSaveData()
              );
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              this.saveableCanvas.clear();
            }}
          >
            Clear
          </button>
          <button
            onClick={() => {
              this.saveableCanvas.undo();
            }}
          >
            Undo
          </button>
        </div>
        <CanvasDraw
          ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          brushColor={this.state.color}
          brushRadius={this.state.brushRadius}
          lazyRadius={this.state.lazyRadius}
          canvasWidth={this.state.width}
          canvasHeight={this.state.height}
          hideGrid={true}
          hideInterface={true}
        />
      </div>
    );
  }
}

export default Canves;