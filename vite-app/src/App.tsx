import PhotoSlideshow from "@/components/PhotoSlideshow"
import MusicPlayer from "@/components/MusicPlayer"
import GuestComments from "@/components/GuestComments"

export default function App() {
  return (
    <div className="flex min-h-screen min-h-[100dvh] w-full min-w-0 max-w-[100vw] items-start justify-center overflow-x-hidden p-4 md:items-center sm:p-6">
      <main
        className="grid w-full min-w-0 max-w-[880px] overflow-hidden rounded-3xl bg-[var(--card-bg)] font-nanum-pen shadow-[0_18px_45px_rgba(0,0,0,0.08)] md:grid-cols-[1.1fr_1.2fr]"
        style={{ fontFamily: "'Nanum Pen Script', cursive" }}
      >
        {/* Left Section */}
        <section
          className="border-b border-pink-200/35 p-8 md:border-b-0 md:border-r"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,239,239,0.8)), radial-gradient(circle at top left, #ffe4e1, transparent 60%)",
          }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-3 py-1.5 text-sm font-semibold tracking-wide text-[var(--accent)]"
            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif" }}
          >
            <span className="h-[7px] w-[7px] rounded-full bg-[var(--accent)]" />
            우리 결혼합니다
          </div>
          <h1 className="mt-5 mb-2.5 text-4xl leading-snug max-sm:text-3xl">
            강아지 🐶 & 고양이 🐱의 결혼
          </h1>
          <p className="mb-1 text-[22px]">
            신랑 <strong className="font-bold">강아지</strong> · 신부 <strong className="font-bold">고양이</strong>
          </p>
          <p className="mb-5 text-lg leading-relaxed text-[var(--text-sub)] max-sm:text-base">
            서로를 가장 사랑하는 친구였던 강아지와 고양이가
            <br />
            평생을 함께할 부부가 되려 합니다.
          </p>
          <div className="mb-4">
            <PhotoSlideshow />
          </div>
          <div className="text-lg leading-relaxed text-[var(--text-main)] max-sm:text-base">
            <div
              className="mb-1.5 text-sm tracking-wider text-[var(--text-sub)]"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif" }}
            >
              Parents
            </div>
            <div>신랑측 부모님: <strong>개똥이</strong>, <strong>말숙이</strong></div>
            <div>신부측 부모님: <strong>초롱이</strong>, <strong>두리</strong></div>
          </div>
          <div className="my-4 h-px bg-gradient-to-r from-transparent via-pink-300/70 to-transparent" />
          <p className="text-lg leading-relaxed text-[var(--text-sub)] max-sm:text-base">
            소중한 날, 사랑하는 분들을 모시고자 합니다.
            <br />
            따뜻한 축복으로 함께해 주세요.
          </p>
        </section>

        {/* Right Section */}
        <section className="flex flex-col gap-3.5 p-7">
          <div>
            <div className="text-sm tracking-wider text-[var(--text-sub)]">When</div>
            <p className="text-[28px] leading-snug tracking-wide text-[var(--text-main)] max-sm:text-2xl">
              2026년 11월 14일
              <br />
              오전 11시 40분
            </p>
          </div>
          <div>
            <div className="text-sm tracking-wider text-[var(--text-sub)]">Where</div>
            <p className="mb-1 text-[22px] text-[var(--text-main)]">청량리 L65호텔</p>
            <p className="text-[17px] leading-snug text-[var(--text-main)]">
              <strong className="font-normal">서울특별시 동대문구 왕산로 200</strong>
            </p>
            <div className="mt-1 overflow-hidden rounded-[18px] border border-black/8">
              <iframe
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC+%EC%99%95%EC%82%B0%EB%A1%9C+200&output=embed"
                className="h-[260px] w-full border-0 max-sm:h-[220px]"
                title="결혼식장 지도"
              />
            </div>
            <p className="mt-2 text-[17px]">
              <a
                className="font-medium text-[var(--accent)] no-underline hover:underline"
                href="https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC+%EC%99%95%EC%82%B0%EB%A1%9C+200"
                target="_blank"
                rel="noopener noreferrer"
              >
                구글 지도에서 보기
              </a>
            </p>
          </div>
          <MusicPlayer />
          <p className="mt-auto text-right text-[15px] text-[var(--text-sub)]">음악이 나와요~!</p>
        </section>

        <GuestComments />

        <footer
          className="col-span-full border-t border-pink-200/35 px-7 py-6 text-center"
          style={{ background: "linear-gradient(180deg, rgba(255,248,248,0.6), #fff)" }}
        >
          <div className="mb-3 text-[15px] tracking-wider text-[var(--text-sub)]">마음 전하실 곳</div>
          <div className="mb-4 flex justify-center gap-3">
            <a
              href="https://qr.kakaopay.com/FdKOkBYw1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-semibold text-[#3A1D1D] transition-opacity hover:opacity-80"
              style={{ background: "#FEE500", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3C7.037 3 3 6.358 3 10.5c0 2.682 1.67 5.03 4.2 6.4l-1.07 3.97a.3.3 0 0 0 .46.32L11.1 18.7c.296.028.597.043.9.043 4.963 0 9-3.358 9-7.5S16.963 3 12 3z" fill="#3A1D1D" />
              </svg>
              신랑 카카오페이
            </a>
            <a
              href="https://qr.kakaopay.com/FdKOkBYw1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-semibold text-[#3A1D1D] transition-opacity hover:opacity-80"
              style={{ background: "#FEE500", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3C7.037 3 3 6.358 3 10.5c0 2.682 1.67 5.03 4.2 6.4l-1.07 3.97a.3.3 0 0 0 .46.32L11.1 18.7c.296.028.597.043.9.043 4.963 0 9-3.358 9-7.5S16.963 3 12 3z" fill="#3A1D1D" />
              </svg>
              신부 카카오페이
            </a>
          </div>
          <div className="text-[17px] tracking-wide text-[var(--text-main)]">카카오페이증권 020-07-237632</div>
        </footer>
      </main>
    </div>
  )
}
