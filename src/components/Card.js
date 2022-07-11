import React from "react"
import marker from "../images/map-marker.png";

export default function Card(props) {
    return (
        <div className="flex items-center gap-8 w-[800px]">
            <img src={props.item.imageUrl} alt="" className="w-52 h-72 rounded-xl object-cover"/>
            <div className="pr-8">
                <div className="flex items-center">
                    <img className="inline-block w-4 h-5 mr-3 object-fill" src={marker} alt="" />
                    <div className="tracking-wide text-lg mr-5 uppercase">{props.item.location}</div>
                    <a href={props.item.googleMapsUrl} className="text-lg underline text-color-gray font-light">View on Google Maps</a>
                </div>
                <h2 className="text-5xl font-bold mb-8">{props.item.title}</h2>
                <div className="text-lg font-bold mb-3">{props.item.startDate} - {props.item.endDate}</div>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}