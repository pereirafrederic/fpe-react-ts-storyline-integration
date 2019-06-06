import React, { Component } from 'react';
import { render } from 'react-dom';
import Line from './Molecules/Line';
import HeaderCase from './Atoms/HeaderCase';
import { IStory } from './Organisms/Iinterface'

import { EEtatLecture, ETypeRecit } from './Atoms/Iinterface'
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
        header :{
          title : 'book of love'
        },
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
                typeRecit: ETypeRecit.PointOfView,
                etatLecture: EEtatLecture.Inconnu
              }, {
                id: 2,
                    typeRecit: ETypeRecit.Tome,
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
                typeRecit: ETypeRecit.Chapiter,
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
          {<HeaderCase header={this.state.story.header} isFristColumn ={true}/>}
          {this.state.story.columns.map(column => <HeaderCase header={column.header} isFristColumn ={false}/>)}
        </div>
        {this.state.story.lines.map((line) => <Line line={line} />)}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
