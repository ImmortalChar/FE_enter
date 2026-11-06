import { useState } from "react";
import "./App.css";

function Profile(props) {
  return (
    <header className="post-profile">
      <img className="profile-image" src={props.profileImage} alt={`${props.username} 프로필`} />

      <strong className="profile-username">{props.username}</strong>

      <button className="more-button" type="button" aria-label="더 보기">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

function PostImage(props) {
  return (
    <div className="post-image-area">
      <img className="post-image" src={props.postImage} alt={props.imageAlt} />
    </div>
  );
}

function PostContent(props) {
  return (
    <section className="post-content">
      <p className="like-count">
        좋아요 <strong>{props.likeCount}</strong>개
      </p>

      <p className="caption">
        <strong>{props.username}</strong>
        <span>{props.caption}</span>
      </p>
    </section>
  );
}

function Post(props) {
  //isLiked = 읽기, setIsLiked = 다음 상태 요청 
  const [isLiked, setIsLiked] = useState(false);

  //좋아요 버튼을 누르면 isLiked를 반전시키는 함수
  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
  };

  //현재 좋아요 개수 = 원래 있는 좋아요 개수에서 isLiked가 true이면 +1, false이면 +0
  const currentLikeCount = props.likeCount + (isLiked ? 1 : 0);

  return (
    <article className="post">
      <Profile username={props.username} profileImage={props.profileImage} />
      <PostImage postImage={props.postImage} imageAlt={props.imageAlt} />

      <div className="post-actions">
        <div className="left-actions">
          <button
            type="button"
            aria-label={isLiked ? "좋아요 취소" : "좋아요"}
            className={isLiked ? "liked" : ""}
            //미리 선언한 함수를 onClick이벤트 발생 시 트리거
            onClick={handleLikeClick}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
            </svg>
          </button>

          <button type="button" aria-label="댓글">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 11.6a9.2 9.2 0 1 0-4.8 8.1L22 22l-1.9-5.7a9.1 9.1 0 0 0 .9-4.7Z" />
            </svg>
          </button>

          <button type="button" aria-label="공유">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m22 2-8.5 20-4-11L1 2h21ZM9.5 11 22 2" />
            </svg>
          </button>
        </div>

        <button type="button" aria-label="저장">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 2h16v20l-8-6-8 6V2Z" />
          </svg>
        </button>
      </div>
      <PostContent
        likeCount={currentLikeCount}
        username={props.username}
        caption={props.caption}
      />
    </article>
  );
}

function App() {
  const posts = [
    {
      id: 1,
      username: "eden",
      profileImage: "/images/eden-avatar.png",
      postImage: "/images/wow.png",
      imageAlt: "홍익대학교 마스코트",
      likeCount: 44,
      caption: "프론트엔드 찍먹 중 👅",
    },
    {
      id: 2,
      username: "gdg",
      profileImage: "/images/gdg-avatar.png",
      postImage: "/images/picasso.png",
      imageAlt: "피카소 캐릭터",
      likeCount: 128,
      caption: "GDG 홍익 함께해요 🚀",
    },
    {
      id: 3,
      username: "Ashur",
      profileImage: "/images/ashur(magic).webp",
      postImage: "/images/magic-school-adv.png",
      imageAlt: "마법학교 홍보 포스터",
      likeCount: 1972,
      caption:
        "지금 바로 가입하라! 에슈르의 마법학교 신입생 대모집!! 에르피엔 최고의 빵집 에심당에서 고결하고 현학적인 마법의 세상으로 여러분을 초대합니다!",
    },
  ];

  return (
    <main className="page">
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          profileImage={post.profileImage}
          postImage={post.postImage}
          imageAlt={post.imageAlt}
          likeCount={post.likeCount}
          caption={post.caption}
        />
      ))}
    </main>
  );
}

export default App;
