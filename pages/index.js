import Link from 'next/link';
import Image from 'next/image';
import { gql, GraphQLClient } from 'graphql-request';
import Section from '../components/Section';
import Navbar from '../components/Navbar';

import disneyLogo from '../public/img/disney-button.png'
import pixarLogo from '../public/img/pixar.png'
import marvelLogo from '../public/img/marvel-button.png'
import starWarsLogo from '../public/img/star-wars-button.png'
import natGeoLogo from '../public/img/natgeo-button.png'

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers : {
      "Authorization" : process.env.GRAPH_CMS_TOKEN,
    }
  })

  const videoQuery = gql`
    query{
      videos{
        createdAt,
        id,
        title,
        description,
        seen,
        slug,
        tags,
        thumbnail {
          url
        },
        mp4 {
          url
        }
      }
    }
  `

  const accountQuery = gql`
    query {
      account(where : {
        id : "cktmbo5cwtk010b76inrqoqni"
      }){
        username,
        avatar {
          url
        }
      }
    }
  `

  const data = await graphQLClient.request(videoQuery)
  const videos = data.videos
  const accountData = await graphQLClient.request(accountQuery)
  const account = accountData.account

  return {
    props: {
      videos,
      account,
    }
  };
}


const Home = ({videos, account}) => {
  const randomVideo = (videos) => {
    return videos[Math.floor(Math.random() * videos.length)]
  }

  const filterVideos = (videos, genre) => {
    return videos.filter((video) => video.tags.includes(genre))
  }
  
  const unseenVideos = (videos) => {
    return videos.filter((video) => video.seen === false || video.seen === null)
  }
  
  return (
    <>
      <Navbar account={account} />
      <div className="app">
        <div className="main-video">
          <img src={randomVideo(videos).thumbnail.url} alt={randomVideo(videos).title} />
        </div>
        <div className="video-feed">
          <Link href="#disneyl" passHref>
            <div className="franchise" id="disney">
              <Image src={disneyLogo} alt="" />
            </div>
          </Link>
          <Link href="#" passHref>
            <div className="franchise" id="pixar">
              <Image src={pixarLogo} alt="" />
            </div>
          </Link>
          <Link href="/" passHref>
            <div className="franchise" id="marvel">
              <Image src={marvelLogo} alt="" />
            </div>
          </Link>
          <Link href="#" passHref>
            <div className="franchise" id="star-wars">
              <Image src={starWarsLogo} alt="" />
            </div>
          </Link>
          <Link href="#" passHref>
            <div className="franchise" id="natgeo">
              <Image src={natGeoLogo} alt="" />
            </div>
          </Link>
        </div>
          <Section genre={'Recommended For You'} videos={unseenVideos(videos)} />
          <Section genre={'Originals'} videos={filterVideos(videos, 'animation')} />
          <Section genre={'Pixar Movies and Shorts'} videos={videos} />
          <Section genre={'Marvel Cinematic Universe'} videos={videos} />
          <Section id='disneyl' genre={'Animated Series'} videos={videos} />
          <Section genre={'Fantasy and Mistery'} videos={videos} />
      </div>
    </>
  )
}

export default Home;