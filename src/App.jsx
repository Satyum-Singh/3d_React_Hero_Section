import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import Logo from "./images/logo.svg";
import IconTwitter from "./images/icon-twitter.svg";
import IconYoutube from "./images/icon-youtube.svg";
import IconLaptop from "./images/icon-laptop.svg";

export default function App() {
  return (
    <Wrapper>
      <div></div>
      <Spline
        className="spline"
        scene="https://prod.spline.design/wWQ5PBZh0XdGwCds/scene.splinecode"
      />
      <Content>
        <Menu>
          <li>
            <img src={Logo} alt="Logo" />
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Download</a>
          </li>
          <li>
            <a href="/">App</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <button>Get Started</button>
          </li>
        </Menu>
        <h1>Collaborate with people</h1>
        <p>
          Bring your team together and build your community by using our
          cross-platform app that lets you collaborate via chat, voice and by
          sharing and storing unlimited media files. A world of topics is
          waiting for you. Join the private beta.
        </p>
        <button>
          <img src={IconLaptop} alt="Download" />
          Download for MAC
        </button>
      </Content>
      <Social>
        <div className="line-div"></div>
        <img src={IconTwitter} alt="twitter" srcset="" />
        <img src={IconYoutube} alt="youtube" srcset="" />
      </Social>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: #fff;
  position: relative;
  overflow-x: hidden;
  width: 100%;
  height: 100%;

  .div {
    width: 20%;
  }

  .spline {
    top: 0;
    left: 0;
    z-index: 0;
    position: absolute;
    transform: scale(0.8) translateX(300px);
    width: 50%;
    height: 50%;

    @media (max-width: 1024px) {
      transform: scale(0.4) translateX(200px) translateY(200px);
      transform-origin: top;
    }
    @media (max-width: 800px) {
      transform: scale(0.3) translateX(200px) translateY(400px);
    }
    @media (max-width: 600px) {
      transform: scale(0.3) translateX(-100px) translateY(500px);
    }
    @media (max-width: 375px) {
      transform: scale(0.45) translateX(-50px);
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;
  display: flex;
  flex-direction: column;
  gap: 88px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 500px;

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }

    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }

    @media (max-width: 600px) {
      font-size: 25px;
      max-width: 250px;
      padding-left: 30px;
    }
  }
  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;

    @media (max-width: 600px) {
      font-size: 16px;
      max-width: 250px;
      padding-left: 30px;
    }
  }
  button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    max-width: 280px;
    backdrop-filter: blur(20px);
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    transition: 1s;
    cursor: pointer;
    &:hover {
      border: 2px solid rgba(255, 255, 255, 0.4);
    }
    img {
      margin-right: 10px;
    }
  }

  h1,
  p,
  button {
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }

    @media (max-width: 600px) {
      margin: 0;
    }

    @media (max-width: 375px) {
      margin: 0;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0;

  @media (max-width: 1024px) {
    margin: 0 30px;
  }

  li {
    list-style: none;
    margin: 0;
    a {
      text-decoration: none;
      color: #fff;
      padding: 8px 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 14px;
      transition: 1s;
    }
    a:hover {
      border: 2px solid rgba(255, 255, 255, 0.4);
    }
  }
  @media (max-width: 800px) {
    justify-content: space-between;
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5) {
      display: none;
    }
  }
`;

const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }

  img {
    cursor: pointer;
  }
`;
