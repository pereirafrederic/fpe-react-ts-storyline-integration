import React, { Component } from "react";
import { render } from "react-dom";
import Line from "./Molecules/Line";
import { IStory } from "./Organisms/Interfaces";

import { EEtatLecture } from "./Atoms/Enums";
import "./style.css";

interface AppProps {}
interface AppState {
  story: IStory;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      story: {
        lines: [
          {
            cases: [
              {
                id: 1,
                etatLecture: EEtatLecture.DEBUTE
              }
            ]
          }
        ],
        columns: []
      }
    };
  }

  render() {
    return (
      <div>
        {this.state.story.lines.map(line => (
          <Line line={line} />
        ))}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
