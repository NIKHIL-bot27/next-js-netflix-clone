const BASE_URL = process.env.BASE_URL_API;
const API_KEY = process.env.API_KEY_ID;

export const getTrendingMedias = async (type) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/${type}/day?df9b2eff0151a974b76b09d12e18a4ab&language=en-US`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjliMmVmZjAxNTFhOTc0Yjc2YjA5ZDEyZTE4YTRhYiIsInN1YiI6IjY0ZmMwOTYwZjg1OTU4MDBhZGM5NTA5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oJHElMPPq2dvmQcOhEndomaYUYtrY87sJeqsonpF-Uk ",
        },
      }
    );

    const data = await res.json();
    console.log(data);

    return data && data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getPopularMedias = async (type) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/${type}/popular?df9b2eff0151a974b76b09d12e18a4ab&language=en-US`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjliMmVmZjAxNTFhOTc0Yjc2YjA5ZDEyZTE4YTRhYiIsInN1YiI6IjY0ZmMwOTYwZjg1OTU4MDBhZGM5NTA5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oJHElMPPq2dvmQcOhEndomaYUYtrY87sJeqsonpF-Uk ",
        },
      }
    );

    const data = await res.json();
    console.log(data);

    return data && data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getTopRatedMedias = async (type) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/${type}/top_rated?df9b2eff0151a974b76b09d12e18a4ab&language=en-US`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjliMmVmZjAxNTFhOTc0Yjc2YjA5ZDEyZTE4YTRhYiIsInN1YiI6IjY0ZmMwOTYwZjg1OTU4MDBhZGM5NTA5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oJHElMPPq2dvmQcOhEndomaYUYtrY87sJeqsonpF-Uk ",
        },
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMediaByGenre = async (type, id) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/${type}?df9b2eff0151a974b76b09d12e18a4ab&language=en-US&include_adult=false&sort_by=popularity.desc&with_genres=${id}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjliMmVmZjAxNTFhOTc0Yjc2YjA5ZDEyZTE4YTRhYiIsInN1YiI6IjY0ZmMwOTYwZjg1OTU4MDBhZGM5NTA5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oJHElMPPq2dvmQcOhEndomaYUYtrY87sJeqsonpF-Uk ",
        },
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMediaVideosById = async (type, id) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}/videos?df9b2eff0151a974b76b09d12e18a4ab&language=en-US&append_to_response=videos`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjliMmVmZjAxNTFhOTc0Yjc2YjA5ZDEyZTE4YTRhYiIsInN1YiI6IjY0ZmMwOTYwZjg1OTU4MDBhZGM5NTA5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oJHElMPPq2dvmQcOhEndomaYUYtrY87sJeqsonpF-Uk ",
        },
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMediaSearchResults = async (type, query) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/${type}?query=${query}&df9b2eff0151a974b76b09d12e18a4ab&language=en-US`,

      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjliMmVmZjAxNTFhOTc0Yjc2YjA5ZDEyZTE4YTRhYiIsInN1YiI6IjY0ZmMwOTYwZjg1OTU4MDBhZGM5NTA5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oJHElMPPq2dvmQcOhEndomaYUYtrY87sJeqsonpF-Uk ",
        },
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getAllfavorites = async (uid, accountID) => {
  try {
    const res = await fetch(
      `/api/favorites/get-all-favorites?id=${uid}&accountID=${accountID}`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.data;
  } catch (e) {
    console.log(e);
  }
};
