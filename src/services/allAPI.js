import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

// upload a video
export const uploadVideo =  async(reqBody)=>{
    // make post http request to http://localhost:4000/videos to add videos in json server and return response to Add component
    return await commonAPI("POST",`${serverURL}/videos`,reqBody)
}

// to get all videos from json server
export const getAllVideos =  async()=>{
    // make get http request to http://localhost:4000/videos to get all  videos from json server and return response to View component
    return await commonAPI("GET",`${serverURL}/videos`,"")
}

// to get a video from json server
export const getAVideo =  async(id)=>{
    // make get http request to http://localhost:4000/videos to get a videos from json server and return response to VideoCard component
    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}

// to remove a video from json server
export const deleteAVideo =  async(id)=>{
    // make delete http request to http://localhost:4000/videos to remove videos in json server and return response to VideoCard component
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}

// store watching video history to json server
export const addToHistory = async (videoDetails) =>{
    // make post http request to http://localhost:4000/videos to add video history in json server and return response to videoCard component
    return await commonAPI("POST",`${serverURL}/history`,videoDetails)


}

// get all watching video history from json server
export const getAllHistory = async () =>{
    // make get http request to http://localhost:4000/videos to get video history from json server and return response to watch history component
    return await commonAPI("GET",`${serverURL}/history`,"")


}