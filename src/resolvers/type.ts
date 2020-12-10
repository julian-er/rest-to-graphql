import { IResolvers } from 'graphql-tools';
import { getWikipediaMobileUrl } from '../lib/utils';

const type: IResolvers = {
  Season:{
    //resolve names, in API REST, is a season. Here I want to name this with year word
      year: parent => parent.season,
    //resolve urlMobile with url mobile importing function from utils
      urlMobile: parent => getWikipediaMobileUrl(parent.url)
  }
};

export default type;
