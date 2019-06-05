import React, { Component } from 'react';
import { render } from 'react-dom';
import Line from './Molecules/Line';
import HeaderCase from './Atoms/HeaderCase';
import { IStory } from './Organisms/Iinterface'

import { EEtatLecture } from './Atoms/Iinterface'
import './style.scss';

interface AppProps { }
interface AppState {
  story: IStory
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      story: {
        lines: [
          {
            header:
            {
              title: '1 janvier 2014'
            }
            ,
            cases: [
              {
                id: 1,
                etatLecture: EEtatLecture.Inconnu
              }, {
                id: 2,
                etatLecture: EEtatLecture.Nouveau
              }, {
                id: 3,
                etatLecture: EEtatLecture.Connu
              }

            ]
          },
          {
            header:
            {
              title: '3 janvier 2014'
            }
            ,
            cases: [
              {
                id: 4,
                etatLecture: EEtatLecture.Lu
              }, {
                id: 5,
                etatLecture: EEtatLecture.EnCours
              }

            ]
          }
        ],
        columns: [{
          header:
          {
            title: 'Terre '
          }, cases: []
        }, {
          header:
          {
            title: 'Eau '
          }, cases: []
        }, {
          header:
          {
            title: 'Feu '
          }, cases: []
        }
        ]
      }
    };
  }

  render() {
    return (
      <div className="Story">

        <div className="columns_header">
          {<HeaderCase header={} />}
          {this.state.story.columns.map(column => <HeaderCase header={column.header} />)}
        </div>
        {this.state.story.lines.map((line) => <Line line={line} />)}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
