let id = 0

/**
 * Returns the shortened version of a peer ID.
 * @param {String} peerID 
 * @returns Short peer ID.
 */
export function shortPeerID(peerID) {
  return `${peerID.substring(0, 4)}..${peerID.slice(-4)}`
}

/**
 * Make a JSON RPC request.
 * @param {String} method
 * @param {Object} params 
 * @returns Result object.
 */
export default async function jsonRPC(method, params) {
  const body = {
    id: id++,
    method: method, 
    params: [params]
  }

  const opts = {
    body: JSON.stringify(body),
    cache: "no-cache",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  }

  const response = await fetch(window.electron.jsonRPC, opts)
  const { error, result } = await response.json()
  
  if (error) throw error

  return result
}
