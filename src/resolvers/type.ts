import { IResolvers } from 'graphql-tools';
import { getWikipediaMobileUrl } from '../lib/utils';

const type: IResolvers = {
  Season:{
    //resolve names, in API REST, is a season. Here I want to name this with year word
      year: parent => parent.season,
    //resolve urlMobile with url mobile importing function from utils
      urlMobile: parent => getWikipediaMobileUrl(parent.url)
  },
  Race:{
    //resolve names, in API REST, is a raceName. Here I want to name this with name word
    name: parent => parent.raceName,
    //resolve names, in API REST, is a Circuit. Here I want to name this with circuit word
    circuit: parent => parent.Circuit
  },
  Circuit:{
    //resolve names, in API REST, is a circuitId. Here I want to name this with id word
    id: parent => parent.circuitId,
    //resolve names, in API REST, is a circuitName. Here I want to name this with name word    
    name: parent => parent.circuitName,
    //resolve names, in API REST, is a Location. Here I want to name this with location word
    location: parent=> parent.Location
  }
};

export default type;
