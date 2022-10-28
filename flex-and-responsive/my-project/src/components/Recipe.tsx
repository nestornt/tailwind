import React from 'react'
import { useReducer } from 'react'
import { BiAlarm } from "react-icons/bi";
import { FaUtensils, FaSignal } from "react-icons/fa";

const reducer = (state, action) => {
  const { type, payload } = action;
  return { ...state, [type]: payload };
};

const Recipe = (props) => {

  const initialState = {
    imageUrl: props.imageUrl,
    imgAlt: props.imgAlt,
    titleUrl: props.titleUrl,
    title: props.title,
    description: props.description,
    time: props.time,
    servings: props.servings,
    level: props.level
  };

  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { imageUrl, imgAlt, titleUrl, title, description, time, servings, level } = state;

  return (
    <div className="flex flex-col justify-center m-4 shadow-lg w-80 rounded overflow-hidden">
      <img src={imageUrl} alt={imgAlt} className="h-4/6 rounded hover:opacity-90 hover:cursor-pointer"/>
        <div className="p-2">
          <div className="font-bold text-lg text-gray-700 leading-snug">
            <a href={titleUrl} className="hover:underline">{title}</a>
          </div>
          <p className="text-xs leading-tight tracking-wide my-2">{description}</p>
          <div className="flex pt-2 border-t border-gray-300 text-sm text-gray-700 divide-x-2">
            <div className="flex-1 text-center">
              <BiAlarm className="inline"/>
              <p>{time}</p>
            </div>
            <div className="flex-1 text-center">
              <FaUtensils className="inline"/>
              <p>{servings}</p>
            </div>
            <div className="flex-1 text-center">
            <FaSignal className="inline"/>
              <p>{level}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Recipe