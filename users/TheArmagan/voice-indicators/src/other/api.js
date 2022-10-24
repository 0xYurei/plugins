import { awaitResponse } from "../connection/socket";
import { getUserVoiceStates, getVoiceChannelMembers } from "./VoiceStates";

const cache = new Map();

setInterval(() => {
  cache.forEach((item, key) => {
    if (Date.now() - item.at > item.ttl) {
      cache.delete(key);
    }
  });
}, 1000);

/** @returns {import("./VoiceStates.js").VoiceStateRaw?} */
export async function fetchUserVoiceState(userId) {
  let state = getUserVoiceStates(userId);
  if (!state) {
    let cached = cache.get(`Users:${userId}`);
    if (cached) return cached.state;

    state = (await awaitResponse("state", { userId }))?.data;
    cache.set(`Users:${userId}`, { at: Date.now(), state, ttl: 1000 });
  }
  return state;
}

export async function fetchVoiceMembers(channelId) {
  let members = getVoiceChannelMembers(channelId);
  if (!members.length) {
    let cached = cache.get(`VoiceMembers:${channelId}`);
    if (cached) return cached.members;

    members = (await awaitResponse("members", { channelId }))?.data || [];
    cache.set(`VoiceMembers:${channelId}`, { at: Date.now(), members, ttl: 10000 });
  }
  return members;
}
