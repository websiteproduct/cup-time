import ContentLoader from "react-content-loader";

export const SkeletonLoader = ({ count = 6 }) => (
  <>
    {Array(count)
      .fill(null)
      .map((_, index) => (
        <div key={index} className="skeleton-wrapper">
          <ContentLoader
            speed={2}
            backgroundColor="#bdd8ff"
            foregroundColor="#b1fbed"
            viewBox="0 0 420 600"
          >
            <rect x="0" y="0" width="100%" height="70%" />
            <rect x="16px" y="calc(70% + 30px)" width="80%" height="30px" />
            <rect x="16px" y="calc(70% + 80px)" width="30%" height="30px" />
          </ContentLoader>
        </div>
      ))}
  </>
);
