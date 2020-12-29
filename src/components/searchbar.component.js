import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Summoner from "./summoner.component";
import Matches from "./matches.component";

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summonerFound: false,
      summoner: "",
      summonerName: "",
      summonerIcon: "",
      summonerLevel: "",
      summonerId: "",
      accountId: "",
      matches: [],
      matchesFound: "",
      rank: [],
      rankLoaded: false,
      solo: "",
      flex: "",
    };
  }
  //Submitting form gets user's account data, sets states, and calls 2 functions for more data
  onSubmit = (e) => {
    e.preventDefault();
    let options = {
      method: "POST",
      url: "http://localhost:5001/summoner/username",
      data: {
        summonerName: this.state.summoner,
      },
    };
    axios
      .request(options)
      .then((response) => {
        this.setState({
          summonerFound: true,
          summonerName: response.data.name,
          summonerIcon: response.data.profileIconId,
          summonerLevel: response.data.summonerLevel,
          accountId: response.data.accountId,
          summonerId: response.data.id,
        });
        this.getRank();
        this.getMatches();
      })
      .catch((error) => {
        console.error(error);
      });
    this.setState({ summoner: "" });
  };

  //Request to backend for ranked data
  getRank = () => {
    const options = {
      method: "POST",
      url: "http://localhost:5001/summoner/rank",
      data: {
        summonerId: this.state.summonerId,
      },
    };
    axios
      .request(options)
      .then((response) => {
        this.setState({
          rank: response.data,
          rankLoaded: true,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //Request to backend for matches
  getMatches = () => {
    const options2 = {
      method: "POST",
      url: "http://localhost:5001/summoner/matches",
      data: { accountId: this.state.accountId },
    };
    axios
      .request(options2)
      .then((response) => {
        this.setState({
          matchesFound: true,
          matches: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //Change state: summoner according to input value
  onChangeSummoner = (e) => {
    this.setState({
      summoner: e.target.value,
    });
  };

  render() {
    return (
      <div className>
        <form
          className="form-inline d-flex justify-content-center md-form form-sm"
          onSubmit={this.onSubmit}
        >
          <input
            className="form-control form-control-sm mr-3 w-75"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={this.state.summoner}
            onChange={this.onChangeSummoner}
          />
          <FontAwesomeIcon
            icon={faSearch}
            aria-hidden="false"
            alt="Search Icon"
          />
        </form>
        <div>
          {this.state.rankLoaded && (
            <Summoner
              found={this.state.summonerFound}
              name={this.state.summonerName}
              icon={this.state.summonerIcon}
              level={this.state.summonerLevel}
              accountId={this.state.accountId}
              matches={this.state.matches}
              summonerId={this.state.summonerId}
              rank={this.state.rank}
            />
          )}
          {this.state.matchesFound && (
            <Matches matches={this.state.matches.matches} />
          )}
        </div>
      </div>
    );
  }
}
