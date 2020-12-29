import { React, Component } from "react";
import queues from "../gameconstants/queues.json";
import champions from "../gameconstants/champions.json";
//Match constant holds an image and text of the champion, queue type of match, and time since match was played
const Match = (props) => (
  <tr>
    <td>
      <img
        src={
          "http://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/" +
          champion(props.match.champion) +
          ".png"
        }
        alt={champion(props.match.champion) + " Icon"}
      ></img>
      <p>{champion(props.match.champion)}</p>
    </td>
    <td>{queueType(props.match.queue)} </td>
    {/*Conditionally rendered elements based on time since match was played */}
    {Math.floor((Date.now() - props.match.timestamp) / 1000 / 60) < 60 && (
      <td>
        {Math.floor((Date.now() - props.match.timestamp) / 1000 / 60)} minutes
      </td>
    )}
    {Math.floor((Date.now() - props.match.timestamp) / 1000 / 60 / 60) < 24 && (
      <td>
        {Math.floor((Date.now() - props.match.timestamp) / 1000 / 60 / 60)}{" "}
        hours
      </td>
    )}
    {Math.floor((Date.now() - props.match.timestamp) / 1000 / 60 / 60) > 24 && (
      <td>
        {Math.floor((Date.now() - props.match.timestamp) / 1000 / 60 / 60 / 24)}{" "}
        days
      </td>
    )}
  </tr>
);
//Champion played during match
const champion = (props) => {
  for (const key in champions) {
    //eslint-disable-next-line
    if (champions[key].key == props) {
      const champ = key;
      return champ;
    }
  }
};
//Queue type of the match
const queueType = (props) => {
  for (const key in queues) {
    if (queues.hasOwnProperty(key) && queues[key].queueId === props) {
      const queue = queues[key].description;
      return <p>{queue}</p>;
    }
  }
};
export default class Matches extends Component {
  matches() {
    return this.props.matches.map((match) => {
      return <Match match={match} />;
    });
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Champion Played</th>
              <th>Queue Type</th>
              <th>Since Played</th>
            </tr>
          </thead>
          <tbody>{this.matches()}</tbody>
        </table>
      </div>
    );
  }
}
