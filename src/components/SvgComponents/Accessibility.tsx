interface Props {
  width?: string;
  height?: string;
}

export const Accessibility = ({ width, height }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 30 36'
      fill='none'
    >
      <path
        d='M11.875 6.125C11.875 5.2962 12.2043 4.50134 12.7903 3.91529C13.3764 3.32924 14.1712 3 15 3C15.8288 3 16.6237 3.32924 17.2097 3.91529C17.7958 4.50134 18.125 5.2962 18.125 6.125C18.125 6.9538 17.7958 7.74866 17.2097 8.33471C16.6237 8.92076 15.8288 9.25 15 9.25C14.1712 9.25 13.3764 8.92076 12.7903 8.33471C12.2043 7.74866 11.875 6.9538 11.875 6.125ZM15 0.500001C14.1517 0.500013 13.3143 0.691918 12.5506 1.06135C11.7869 1.43079 11.1167 1.96818 10.59 2.6333C10.0634 3.29843 9.69408 4.07405 9.50965 4.90212C9.32522 5.73019 9.33047 6.58925 9.52503 7.415L5.49503 5.79C4.51723 5.3962 3.42351 5.40429 2.45164 5.81251C1.47978 6.22073 0.708334 6.99608 0.305031 7.97C0.105406 8.4523 0.00335469 8.96939 0.00477537 9.49137C0.00619606 10.0134 0.111061 10.5299 0.313309 11.0111C0.515556 11.4923 0.811175 11.9286 1.18308 12.2949C1.55498 12.6612 1.99579 12.9501 2.48003 13.145L7.50003 15.1725V21.1325L2.96753 29.6575C2.72212 30.1188 2.56997 30.6239 2.51976 31.1439C2.46956 31.664 2.52228 32.1889 2.67491 32.6886C2.82755 33.1883 3.07711 33.653 3.40936 34.0562C3.7416 34.4595 4.15001 34.7933 4.61128 35.0388C5.54285 35.5344 6.63316 35.6396 7.64234 35.3314C8.65152 35.0231 9.49691 34.3266 9.99253 33.395L15 23.975L20.01 33.395C20.5053 34.3266 21.3504 35.0232 22.3593 35.3317C23.3683 35.6402 24.4585 35.5353 25.39 35.04C26.3216 34.5447 27.0183 33.6996 27.3268 32.6907C27.6353 31.6817 27.5303 30.5916 27.035 29.66L22.5 21.13V15.1725L27.52 13.145C28.0043 12.9501 28.4451 12.6612 28.817 12.2949C29.1889 11.9286 29.4845 11.4923 29.6868 11.0111C29.889 10.5299 29.9939 10.0134 29.9953 9.49137C29.9967 8.96939 29.8947 8.4523 29.695 7.97C29.2922 6.99563 28.521 6.21971 27.549 5.811C26.5771 5.40229 25.4831 5.39384 24.505 5.7875L20.4775 7.415C20.6721 6.58905 20.6773 5.72977 20.4928 4.90151C20.3082 4.07326 19.9386 3.29749 19.4117 2.63232C18.8848 1.96715 18.2143 1.42981 17.4503 1.06054C16.6863 0.691264 15.8486 0.499636 15 0.500001ZM2.61753 8.9225C2.7688 8.55881 3.05705 8.26921 3.42003 8.11626C3.78301 7.9633 4.19159 7.95926 4.55753 8.105L13.1275 11.5675C14.3287 12.0527 15.6713 12.0527 16.8725 11.5675L25.4425 8.105C25.8085 7.95926 26.217 7.9633 26.58 8.11626C26.943 8.26921 27.2313 8.55881 27.3825 8.9225C27.4566 9.09994 27.4946 9.29033 27.4944 9.48261C27.4942 9.67488 27.4558 9.8652 27.3813 10.0425C27.3069 10.2198 27.1979 10.3805 27.0608 10.5152C26.9236 10.65 26.7611 10.7561 26.5825 10.8275L21.5625 12.8525C21.1001 13.0396 20.7042 13.3607 20.4258 13.7746C20.1473 14.1885 19.999 14.6762 20 15.175V21.1325C19.9998 21.5422 20.1002 21.9457 20.2925 22.3075L24.8275 30.835C24.9915 31.179 25.0165 31.573 24.8972 31.935C24.7779 32.297 24.5236 32.5989 24.1872 32.7781C23.8508 32.9572 23.4583 32.9997 23.0914 32.8967C22.7245 32.7937 22.4115 32.5531 22.2175 32.225L17.2075 22.8C16.9946 22.3994 16.6766 22.0643 16.2877 21.8306C15.8989 21.5969 15.4537 21.4734 15 21.4734C14.5463 21.4734 14.1012 21.5969 13.7123 21.8306C13.3234 22.0643 13.0055 22.3994 12.7925 22.8L7.78503 32.2175C7.69393 32.3889 7.56996 32.5406 7.42021 32.6641C7.27046 32.7876 7.09785 32.8803 6.91225 32.9371C6.72665 32.9938 6.53169 33.0135 6.33849 32.9949C6.1453 32.9763 5.95766 32.9199 5.78628 32.8288C5.61491 32.7376 5.46315 32.6137 5.33969 32.4639C5.21622 32.3142 5.12346 32.1416 5.0667 31.956C5.00994 31.7704 4.99029 31.5754 5.00888 31.3822C5.02747 31.189 5.08393 31.0014 5.17503 30.83L9.70753 22.305C9.89944 21.944 9.99988 21.5414 10 21.1325V15.1725C10 14.6745 9.85129 14.1879 9.5729 13.775C9.29452 13.3621 8.89917 13.0417 8.43753 12.855L3.41753 10.825C3.23899 10.7536 3.07642 10.6475 2.93928 10.5127C2.80215 10.378 2.69319 10.2173 2.61874 10.04C2.54429 9.8627 2.50585 9.67238 2.50564 9.48011C2.50543 9.28783 2.54347 9.09994 2.61753 8.9225Z'
        fill='#A729F5'
      />
    </svg>
  );
};
