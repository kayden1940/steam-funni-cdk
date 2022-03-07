import { log } from "console";

const axios = require("axios").default;
const TwitterApi = require("twitter-api-v2").default;

//twitter
const callbackURL = `http://192.168.10.151:3000`;
const twitterClient = new TwitterApi({
  clientId: "blI1MUx6eWJNRldyLWt5Q0ZpU2w6MTpjaQ",
  clientSecret: "cu0MPAMiMaLxSIuD352ZoL0yyvzVc0zY9R95uV76H9NtprL18T",
});

const auth = () => {
//   const { url, codeVerifier, state } = twitterClient.generateOAuth2AuthLink(
//     callbackURL,
//     { scope: ["tweet.read", "tweet.write", "users.read", "offline.access"] }
//   );

//   console.log("url", url);
  
  //todo: save state and codeVerifier to database
//   console.log("codeVerifier", codeVerifier);
//   console.log("state", state);
};
auth();

type Funni = String;
type GameId = String;
type Review = {
  recommendationid: String;
  author: {
    steamid: String;
    num_games_owned: number;
    num_reviews: number;
    playtime_forever: number;
    playtime_last_two_weeks: number;
    playtime_at_review: number;
    last_played: number;
  };
  language: String;
  review: String;
  timestamp_created: number;
  timestamp_updated: number;
  voted_up: Boolean;
  votes_up: number;
  votes_funny: number;
  weighted_vote_score: String;
  comment_count: number;
  steam_purchase: Boolean;
  received_for_free: Boolean;
  written_during_early_access: Boolean;
};
const tweetHisotry = {
  gameIds: [],
  reviewIds: [],
};
const gameQueue: GameId[] = [];
const funniQueue: Funni[] = [];

const addGames = (gameIds: GameId[]) => {
  gameQueue.push(...gameIds);
};

const addFunni = (funni: Funni) => {
  funniQueue.push(funni);
};

const getTop100Gamesin2weeks = () => {};

const fetchFunnisByGameId = async (gameId: GameId) => {
  try {
    // const reviews: Review[] = [];
    const funnis: Funni[] = [];
    const fetchGameDetail = async (gameId: GameId) => {
      const response = await axios({
        method: "get",
        url: `http://store.steampowered.com/api/appdetails/?appids=${gameId}`,
        responseType: "json",
      });
      if (`data` in response) {
        // console.log("response", response.data);
      }
    };

    const fetchReviews = async (cursor: String) => {
      //cursor is pagination id
      const response = await axios({
        method: "get",
        url: `https://store.steampowered.com/appreviews/${gameId}?json=1&num_per_page=75&cursor=${cursor}&filter=funny&language=english&start_date=-1&end_date=-1`,
        responseType: "json",
      });
      if (`data` in response && `reviews` in response.data) {
        funnis;
      }
    };
    fetchReviews(`*`);
    fetchGameDetail(`400`);
  } catch (error) {
    console.error(error);
  }
};
fetchFunnisByGameId(`400`);
