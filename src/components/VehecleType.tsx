import React from "react";

function VehecleType() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 p-4 rounded-full bg-green-5">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_646_10362)">
            <path
              d="M33.9994 18.0722C33.9994 16.7135 33.3988 15.9604 32.0266 15.6324C30.2831 15.2141 28.5366 14.8124 26.793 14.3931C25.1986 14.0108 23.5622 13.7517 22.1319 12.8821C21.5084 12.5036 20.8518 12.1756 20.2102 11.8243C18.6088 10.946 16.8913 10.487 15.0256 10.5627C14.1709 10.5986 13.3151 10.5899 12.4604 10.5569C10.6007 10.4831 8.87221 10.9169 7.22776 11.7282C5.85955 12.4027 4.48935 13.0704 2.98602 13.4343C2.33244 13.5925 1.68487 13.7846 1.04831 13.9875C0.747838 14.0834 0.486019 14.2684 0.299795 14.5164C0.11357 14.7643 0.0123424 15.0627 0.0103946 15.3694C0.00238757 16.499 0.0103946 17.6287 0.0103946 18.7583C0.00918548 19.0241 0.0265729 19.2896 0.0624394 19.5531C0.162528 20.2528 0.579897 20.7119 1.29953 20.7555C2.20633 20.8108 3.12014 20.7691 4.02694 20.7691C4.44331 18.5749 5.65938 17.389 7.503 17.3628C9.49276 17.3346 10.6758 18.4196 11.2063 20.7701H22.7815C23.1818 18.635 24.3889 17.4249 26.1454 17.3618C27.0162 17.3307 27.8059 17.5374 28.5005 18.0411C29.4263 18.7205 29.8757 19.6434 29.9308 20.7837C30.7555 20.7837 31.5532 20.7837 32.3509 20.7837C33.3278 20.7837 33.9854 20.149 34.0024 19.194C34.0044 18.8223 34.0004 18.4477 33.9994 18.0722ZM8.47686 16.2225H7.20674C7.16895 16.2225 7.1327 16.208 7.10589 16.1822C7.07908 16.1563 7.06388 16.1213 7.06362 16.0847C7.06362 16.0479 7.07869 16.0126 7.10554 15.9865C7.13238 15.9605 7.16878 15.9459 7.20674 15.9459H8.47986C8.51782 15.9459 8.55423 15.9605 8.58107 15.9865C8.60791 16.0126 8.62299 16.0479 8.62299 16.0847C8.62273 16.1213 8.60753 16.1563 8.58072 16.1822C8.55391 16.208 8.51765 16.2225 8.47986 16.2225H8.47686ZM12.9018 14.3485C12.9018 14.7736 12.7016 14.9696 12.2622 14.9725C11.4125 14.9793 10.5607 14.9725 9.71295 14.9725C8.91225 14.9725 8.11154 14.9774 7.31083 14.9725C7.12479 14.9743 6.93953 14.9487 6.76135 14.8968C6.65808 14.863 6.56452 14.8059 6.48831 14.7304C6.41209 14.6548 6.35537 14.5629 6.32278 14.462C6.29019 14.3611 6.28265 14.2542 6.30077 14.15C6.31889 14.0458 6.36216 13.9472 6.42705 13.8623C6.58073 13.6536 6.77738 13.4782 7.00456 13.347C7.74147 12.9177 8.50267 12.5289 9.28458 12.1824C9.74098 11.9883 10.2654 11.9126 10.7679 11.8602C11.2703 11.8078 11.7918 11.8398 12.3032 11.8457C12.7036 11.8457 12.8948 12.0397 12.8988 12.4279C12.9088 13.0671 12.9108 13.7073 12.9048 14.3485H12.9018ZM16.1556 16.2225H14.8825C14.8447 16.2225 14.8085 16.208 14.7817 16.1822C14.7548 16.1563 14.7397 16.1213 14.7394 16.0847C14.7394 16.0479 14.7545 16.0126 14.7813 15.9865C14.8081 15.9605 14.8446 15.9459 14.8825 15.9459H16.1556C16.1936 15.9459 16.23 15.9605 16.2568 15.9865C16.2837 16.0126 16.2988 16.0479 16.2988 16.0847C16.2985 16.1208 16.2837 16.1554 16.2576 16.1812C16.2314 16.2069 16.1959 16.2217 16.1586 16.2225H16.1556ZM21.5544 14.956C21.5372 14.9586 21.5198 14.9602 21.5024 14.9609C20.3894 14.9871 19.2754 14.9725 18.1614 14.9725C17.0858 14.9725 16.0095 14.9725 14.9326 14.9725C14.4081 14.9725 14.2219 14.8017 14.2169 14.3097C14.2099 13.6925 14.2089 13.0743 14.2169 12.457C14.2229 12.0067 14.3991 11.8651 14.8525 11.8359C15.2525 11.8095 15.6539 11.8118 16.0535 11.8427C16.9797 11.917 17.8864 12.1414 18.7359 12.5065C19.6417 12.8947 20.4744 13.4314 21.3502 13.8778C21.5954 14.003 21.8737 14.1631 21.9177 14.4552C21.9368 14.5678 21.9098 14.6831 21.8425 14.7766C21.7752 14.8701 21.6729 14.9345 21.5574 14.956H21.5544ZM32.3639 18.3226C31.8695 18.3226 31.4371 17.8548 31.4341 17.3259C31.4341 16.8911 31.7214 16.5786 32.1227 16.5815C32.6041 16.5815 33.0485 17.0668 33.0535 17.5899C33.0595 18.0324 32.7843 18.3255 32.3669 18.3226H32.3639Z"
              fill="#5A6375"
            ></path>
            <path
              d="M7.6026 18.133C6.87665 18.1348 6.18106 18.4156 5.6683 18.9139C5.15554 19.4122 4.86745 20.0872 4.86719 20.7911C4.86929 21.4956 5.15856 22.1706 5.67192 22.6691C6.18528 23.1676 6.88109 23.4491 7.60761 23.4521C8.3336 23.4483 9.02857 23.1663 9.54099 22.6676C10.0534 22.169 10.3417 21.4941 10.343 20.7902C10.3422 20.0857 10.0532 19.4103 9.53949 18.9121C9.02574 18.414 8.32916 18.1338 7.6026 18.133V18.133ZM7.5946 21.7664C7.32899 21.7652 7.07454 21.6627 6.88617 21.4812C6.69779 21.2996 6.59059 21.0535 6.58771 20.796C6.58618 20.6654 6.61184 20.5359 6.66316 20.4151C6.71448 20.2944 6.7904 20.185 6.88637 20.0934C6.98235 20.0017 7.0964 19.9299 7.2217 19.882C7.34701 19.8341 7.48099 19.8113 7.61561 19.8148C7.74705 19.8139 7.87739 19.8382 7.99917 19.8861C8.12096 19.934 8.23181 20.0048 8.3254 20.0943C8.419 20.1838 8.49349 20.2902 8.54464 20.4076C8.59579 20.525 8.62259 20.6511 8.6235 20.7785C8.62405 20.9092 8.59773 21.0387 8.54609 21.1594C8.49445 21.2802 8.41852 21.3897 8.32274 21.4817C8.22695 21.5737 8.11323 21.6462 7.98821 21.6951C7.86319 21.744 7.72939 21.7682 7.5946 21.7664Z"
              fill="#5A6375"
            ></path>
            <path
              d="M26.3914 18.134C26.032 18.1303 25.6755 18.1954 25.3422 18.3258C25.0089 18.4561 24.7055 18.649 24.4493 18.8934C24.1932 19.1378 23.9894 19.4289 23.8496 19.7499C23.7099 20.0709 23.6369 20.4155 23.6349 20.764C23.6267 21.4672 23.9066 22.1448 24.4134 22.6479C24.9201 23.1511 25.6121 23.4386 26.3373 23.4473C27.8226 23.4725 29.0968 22.2614 29.1078 20.8134C29.1097 20.1101 28.8256 19.4344 28.3171 18.9328C27.8086 18.4312 27.1167 18.1442 26.3914 18.134V18.134ZM26.3663 21.7664C26.2319 21.7677 26.0985 21.7426 25.9742 21.6927C25.8499 21.6428 25.7373 21.5692 25.643 21.4762C25.5488 21.3831 25.4748 21.2726 25.4256 21.1513C25.3763 21.0299 25.3528 20.9001 25.3565 20.7698C25.3568 20.6423 25.3834 20.5162 25.4347 20.3989C25.4859 20.2815 25.5608 20.1753 25.655 20.0864C25.7491 19.9974 25.8606 19.9276 25.9829 19.881C26.1053 19.8344 26.236 19.8119 26.3674 19.8148C26.502 19.8137 26.6355 19.8385 26.7601 19.888C26.8847 19.9374 26.9978 20.0104 27.093 20.1028C27.1881 20.1951 27.2633 20.3049 27.3142 20.4258C27.3651 20.5467 27.3906 20.6761 27.3893 20.8067C27.3804 21.064 27.2688 21.308 27.0779 21.4871C26.8871 21.6662 26.6319 21.7663 26.3663 21.7664Z"
              fill="#5A6375"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_646_10362">
              <rect
                width="34"
                height="12.8966"
                fill="white"
                transform="translate(0 10.5517)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
      <h4 className="text-sand-12">Car</h4>
    </div>
  );
}

export default VehecleType;