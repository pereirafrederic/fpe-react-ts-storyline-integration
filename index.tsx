import React, { Component } from "react";
import { render } from "react-dom";
import Line from "./Organisms/Line";

import { EnumEtatLecture } from "./Iinterface";
import "./style.scss";

interface AppProps {}
interface AppState {
  story: IStory;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      story: {
        id: 1,
        lines: [
          {
            id: 1,
            cases: [
              {
                id: 1,
                etatLecture: EnumEtatLecture.NON_OUVERT
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
          <Line key={line.id} line={line} />
        ))}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
