import { motion } from "framer-motion";
import { MotionPath } from "@/components";

const registrationInputs = [
  {
    name: "email",
    placeholder: "Type your email...",
    type: "email",
    requiredMessage: "Email is required",
    reqPattern: true,
  },
  {
    name: "username",
    placeholder: "Type your username...",
    type: "username",
    requiredMessage: "Username is required",
  },
  {
    name: "password",
    placeholder: "Type your password...",
    type: "password",
    requiredMessage: "Password is required",
  },
];

const loginInputs = [
  {
    name: "email",
    placeholder: "Type your email...",
    type: "email",
    requiredMessage: "Email is required",
  },
  {
    name: "password",
    placeholder: "Type your password...",
    type: "password",
    requiredMessage: "Password is required",
  },
];

const navLinks = [
  {
    id: 1,
    title: "dashboard",
    ref: "/",
    image: (selected: boolean) => (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <MotionPath
          d="M10.2172 3.95668C10.159 3.90105 10.0817 3.87 10.0012 3.87C9.92069 3.87 9.84331 3.90105 9.78515 3.95668L2.59375 10.8266C2.56321 10.8558 2.53891 10.8909 2.52233 10.9298C2.50574 10.9687 2.49722 11.0105 2.49727 11.0528L2.49609 17.5004C2.49609 17.8319 2.62779 18.1499 2.86221 18.3843C3.09663 18.6187 3.41457 18.7504 3.74609 18.7504H7.5C7.66576 18.7504 7.82473 18.6846 7.94194 18.5674C8.05915 18.4502 8.125 18.2912 8.125 18.1254V12.8129C8.125 12.73 8.15792 12.6506 8.21653 12.592C8.27513 12.5333 8.35462 12.5004 8.4375 12.5004H11.5625C11.6454 12.5004 11.7249 12.5333 11.7835 12.592C11.8421 12.6506 11.875 12.73 11.875 12.8129V18.1254C11.875 18.2912 11.9408 18.4502 12.0581 18.5674C12.1753 18.6846 12.3342 18.7504 12.5 18.7504H16.2523C16.5839 18.7504 16.9018 18.6187 17.1362 18.3843C17.3706 18.1499 17.5023 17.8319 17.5023 17.5004V11.0528C17.5024 11.0105 17.4939 10.9687 17.4773 10.9298C17.4607 10.8909 17.4364 10.8558 17.4059 10.8266L10.2172 3.95668Z"
          selected={selected}
        />
        <MotionPath
          d="M19.1767 9.53827L16.2548 6.74296V2.50116C16.2548 2.3354 16.1889 2.17643 16.0717 2.05922C15.9545 1.94201 15.7956 1.87616 15.6298 1.87616H13.7548C13.589 1.87616 13.4301 1.94201 13.3129 2.05922C13.1956 2.17643 13.1298 2.3354 13.1298 2.50116V3.75116L10.8673 1.58788C10.6556 1.37382 10.3407 1.25116 10.0005 1.25116C9.66144 1.25116 9.34737 1.37382 9.13566 1.58827L0.827066 9.53749C0.584097 9.77186 0.553628 10.1574 0.774722 10.4113C0.830242 10.4754 0.898222 10.5275 0.974526 10.5645C1.05083 10.6015 1.13386 10.6226 1.21857 10.6264C1.30327 10.6303 1.38788 10.6169 1.46724 10.587C1.5466 10.5572 1.61905 10.5115 1.68019 10.4527L9.78566 2.70741C9.84381 2.65178 9.92119 2.62073 10.0017 2.62073C10.0822 2.62073 10.1595 2.65178 10.2177 2.70741L18.3239 10.4527C18.4433 10.5672 18.6033 10.6297 18.7687 10.6265C18.9341 10.6233 19.0915 10.5546 19.2064 10.4355C19.4462 10.1871 19.4263 9.77694 19.1767 9.53827Z"
          selected={selected}
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "transactions",
    ref: "/transactions",
    image: (selected: boolean) => (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <MotionPath
          d="M4.0625 19.3755H2.8125C2.56386 19.3755 2.3254 19.2767 2.14959 19.1009C1.97377 18.9251 1.875 18.6866 1.875 18.438V12.813C1.875 12.5643 1.97377 12.3259 2.14959 12.1501C2.3254 11.9743 2.56386 11.8755 2.8125 11.8755H4.0625C4.31114 11.8755 4.5496 11.9743 4.72541 12.1501C4.90123 12.3259 5 12.5643 5 12.813V18.438C5 18.6866 4.90123 18.9251 4.72541 19.1009C4.5496 19.2767 4.31114 19.3755 4.0625 19.3755Z"
          selected={selected}
        />
        <MotionPath
          d="M12.8125 19.3744H11.5625C11.3139 19.3744 11.0754 19.2756 10.8996 19.0998C10.7238 18.924 10.625 18.6856 10.625 18.4369V9.06192C10.625 8.81328 10.7238 8.57482 10.8996 8.39901C11.0754 8.22319 11.3139 8.12442 11.5625 8.12442H12.8125C13.0611 8.12442 13.2996 8.22319 13.4754 8.39901C13.6512 8.57482 13.75 8.81328 13.75 9.06192V18.4369C13.75 18.6856 13.6512 18.924 13.4754 19.0998C13.2996 19.2756 13.0611 19.3744 12.8125 19.3744Z"
          selected={selected}
        />
        <MotionPath
          d="M17.1875 19.3749H15.9375C15.6889 19.3749 15.4504 19.2761 15.2746 19.1003C15.0988 18.9245 15 18.686 15 18.4374V4.68741C15 4.43877 15.0988 4.20031 15.2746 4.0245C15.4504 3.84868 15.6889 3.74991 15.9375 3.74991H17.1875C17.4361 3.74991 17.6746 3.84868 17.8504 4.0245C18.0262 4.20031 18.125 4.43877 18.125 4.68741V18.4374C18.125 18.686 18.0262 18.9245 17.8504 19.1003C17.6746 19.2761 17.4361 19.3749 17.1875 19.3749Z"
          selected={selected}
        />
        <MotionPath
          d="M8.4375 19.3747H7.1875C6.93886 19.3747 6.7004 19.2759 6.52459 19.1001C6.34877 18.9243 6.25 18.6858 6.25 18.4372V1.56216C6.25 1.31352 6.34877 1.07507 6.52459 0.899252C6.7004 0.723436 6.93886 0.624664 7.1875 0.624664H8.4375C8.68614 0.624664 8.9246 0.723436 9.10041 0.899252C9.27623 1.07507 9.375 1.31352 9.375 1.56216V18.4372C9.375 18.6858 9.27623 18.9243 9.10041 19.1001C8.9246 19.2759 8.68614 19.3747 8.4375 19.3747Z"
          selected={selected}
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "accounts",
    ref: "/accounts",
    image: (selected: boolean) => (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <MotionPath
          d="M18.5188 4.10138C18.8441 4.38831 19.1149 4.74414 19.3118 5.14925C19.374 5.27744 19.3274 5.43264 19.2126 5.5087L12.3753 10.0399C10.9089 11.0117 9.05987 11.0321 7.57508 10.0928L0.692091 5.73869C0.580889 5.66834 0.529846 5.52354 0.579961 5.39609C0.779219 4.88937 1.08975 4.44751 1.47823 4.10402L1.47786 4.10054L1.49124 4.09258C1.77871 3.84115 2.10829 3.64332 2.46663 3.51248L6.95125 0.845271C8.84623 -0.281756 11.1504 -0.281757 13.0454 0.84527L17.5248 3.50935C17.8894 3.64122 18.2244 3.84238 18.5158 4.09877L18.5188 4.10138Z"
          selected={selected}
        />
        <MotionPath
          d="M0.167189 7.91825C0.187027 7.70769 0.404175 7.59184 0.57436 7.6995L6.7424 11.6014C8.75124 12.8721 11.2529 12.8445 13.2368 11.5297L19.3961 7.44792C19.5655 7.33565 19.7863 7.44937 19.8077 7.66141C20.1133 10.684 20.0546 13.7381 19.6318 16.7485C19.4152 18.2906 18.2395 19.4729 16.7883 19.6079L15.1404 19.7613C11.7199 20.0796 8.28009 20.0796 4.85963 19.7613L3.21169 19.6079C1.76048 19.4729 0.584835 18.2906 0.368221 16.7485C-0.0426718 13.8234 -0.109682 10.8569 0.167189 7.91825Z"
          selected={selected}
        />
      </svg>
    ),
  },
];

const profileLinks = [
  {
    id: 1,
    title: "profile",
    ref: "/profile",
    image: (selected: boolean) => (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <MotionPath
          d="M13.1729 3.06737C12.4127 2.30649 11.351 1.88747 10.1791 1.88747C9.00099 1.88747 7.93576 2.30395 7.17911 3.06013C6.41427 3.82464 6.04161 4.86366 6.12911 5.98561C6.30255 8.1991 8.11935 9.99973 10.1791 9.99973C12.2389 9.99973 14.0526 8.19946 14.2287 5.98634C14.3174 4.87452 13.9424 3.83767 13.1729 3.06737Z"
          selected={selected}
        />
        <MotionPath
          d="M17.0542 18.1112H3.30418C3.1242 18.1133 2.94597 18.0783 2.78245 18.0086C2.61892 17.9388 2.47422 17.8362 2.35887 17.7081C2.10496 17.4267 2.00262 17.0425 2.0784 16.6539C2.40808 14.9583 3.43699 13.5339 5.05418 12.534C6.4909 11.6464 8.31082 11.1578 10.1792 11.1578C12.0475 11.1578 13.8675 11.6467 15.3042 12.534C16.9214 13.5335 17.9503 14.9579 18.28 16.6535C18.3557 17.0421 18.2534 17.4263 17.9995 17.7077C17.8842 17.8359 17.7395 17.9386 17.576 18.0084C17.4124 18.0782 17.2342 18.1133 17.0542 18.1112Z"
          selected={selected}
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "login",
    ref: "/auth/login",
    image: (selected: boolean) => (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <MotionPath
          d="M16.7187 8.7502H11.25C10.7527 8.7502 10.2758 8.55266 9.92417 8.20103C9.57254 7.8494 9.375 7.37248 9.375 6.8752V1.40645C9.375 1.36501 9.35854 1.32527 9.32924 1.29597C9.29993 1.26667 9.26019 1.2502 9.21875 1.2502H5.625C4.96196 1.2502 4.32607 1.5136 3.85723 1.98244C3.38839 2.45128 3.125 3.08716 3.125 3.7502V16.2502C3.125 16.9132 3.38839 17.5491 3.85723 18.018C4.32607 18.4868 4.96196 18.7502 5.625 18.7502H14.375C15.038 18.7502 15.6739 18.4868 16.1428 18.018C16.6116 17.5491 16.875 16.9132 16.875 16.2502V8.90645C16.875 8.86501 16.8585 8.82527 16.8292 8.79597C16.7999 8.76666 16.7602 8.7502 16.7187 8.7502Z"
          selected={selected}
        />
        <MotionPath
          d="M16.3758 7.36798L10.7582 1.7504C10.7473 1.73954 10.7334 1.73215 10.7183 1.72916C10.7032 1.72618 10.6875 1.72772 10.6733 1.73361C10.659 1.73949 10.6469 1.74946 10.6383 1.76225C10.6297 1.77503 10.6251 1.79007 10.625 1.80548V6.87618C10.625 7.04194 10.6908 7.20091 10.8081 7.31812C10.9253 7.43533 11.0842 7.50118 11.25 7.50118H16.3207C16.3361 7.50112 16.3511 7.4965 16.3639 7.48791C16.3767 7.47932 16.3867 7.46714 16.3926 7.45291C16.3985 7.43867 16.4 7.42302 16.397 7.4079C16.394 7.39279 16.3866 7.3789 16.3758 7.36798Z"
          selected={selected}
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "register",
    ref: "/auth/register",
    image: (selected: boolean) => (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <MotionPath
          d="M18.6578 1.49542C18.6507 1.46087 18.6338 1.42908 18.6093 1.40375C18.5847 1.37843 18.5534 1.36064 18.5191 1.35245C16.2312 0.793078 10.9449 2.78644 8.08085 5.64933C7.57002 6.15603 7.10432 6.70628 6.68905 7.29386C5.80585 7.21573 4.92264 7.28097 4.16991 7.60909C2.04608 8.54386 1.42772 10.9829 1.25546 12.0321C1.24569 12.0896 1.24937 12.1485 1.26622 12.2042C1.28308 12.26 1.31264 12.3111 1.35258 12.3535C1.39252 12.3959 1.44176 12.4285 1.49641 12.4486C1.55107 12.4688 1.60966 12.476 1.66757 12.4696L5.07811 12.0935C5.08055 12.3506 5.09606 12.6074 5.1246 12.863C5.14176 13.0405 5.22054 13.2063 5.34725 13.3317L6.66795 14.6493C6.7935 14.7759 6.95929 14.8546 7.1367 14.872C7.39083 14.9004 7.64624 14.9159 7.90194 14.9185L7.52772 18.3247C7.52148 18.3826 7.52873 18.4412 7.54891 18.4958C7.56909 18.5504 7.60165 18.5996 7.64404 18.6395C7.68642 18.6794 7.73748 18.709 7.7932 18.7259C7.84893 18.7428 7.90781 18.7465 7.96522 18.7368C9.01249 18.5689 11.4558 17.9505 12.3851 15.8267C12.7133 15.0739 12.7805 14.195 12.7047 13.3161C13.2937 12.9008 13.8454 12.435 14.3535 11.9239C17.2265 9.06534 19.2086 3.89698 18.6578 1.49542ZM11.4871 8.51378C11.2247 8.2516 11.0461 7.91751 10.9736 7.55376C10.9012 7.19002 10.9382 6.81295 11.0801 6.47027C11.222 6.12759 11.4623 5.83468 11.7707 5.6286C12.079 5.42252 12.4416 5.31252 12.8125 5.31252C13.1834 5.31252 13.5459 5.42252 13.8543 5.6286C14.1627 5.83468 14.403 6.12759 14.5449 6.47027C14.6868 6.81295 14.7238 7.19002 14.6514 7.55376C14.5789 7.91751 14.4002 8.2516 14.1379 8.51378C13.9639 8.68799 13.7573 8.8262 13.5299 8.92049C13.3025 9.01479 13.0587 9.06333 12.8125 9.06333C12.5663 9.06333 12.3225 9.01479 12.0951 8.92049C11.8677 8.8262 11.6611 8.68799 11.4871 8.51378Z"
          selected={selected}
        />
        <MotionPath
          d="M6.57812 15.6037C6.36406 15.8182 6.0207 15.9018 5.60742 15.9732C4.67891 16.1314 3.85898 15.3291 4.02578 14.3904C4.08945 14.0346 4.27773 13.5357 4.39492 13.4185C4.42054 13.3934 4.43758 13.3609 4.44365 13.3255C4.44971 13.2902 4.44448 13.2538 4.42869 13.2216C4.41291 13.1894 4.38737 13.1629 4.35572 13.146C4.32406 13.1292 4.28789 13.1227 4.25234 13.1275C3.73311 13.1911 3.25005 13.4265 2.88008 13.7963C1.96172 14.7154 1.875 18.126 1.875 18.126C1.875 18.126 5.2875 18.0392 6.20586 17.1201C6.57682 16.7504 6.81252 16.2666 6.875 15.7467C6.88945 15.5834 6.69062 15.4861 6.57812 15.6037Z"
          selected={selected}
        />
      </svg>
    ),
  },
];

const cards = [
  {
    id: 1,
    title: "Today's money",
    amount: 53000,
    percentage: 55,
    image: (
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.44668 4.81816H18.5092C18.6734 4.81809 18.8375 4.82851 19.0005 4.84937C18.9453 4.46167 18.8121 4.08917 18.609 3.75433C18.4059 3.41949 18.1371 3.12925 17.8188 2.9011C17.5006 2.67294 17.1394 2.51161 16.757 2.42683C16.3747 2.34204 15.9792 2.33556 15.5943 2.40776L4.0292 4.38223H4.01602C3.29007 4.52105 2.64451 4.93178 2.21118 5.53052C2.86403 5.06616 3.64553 4.81713 4.44668 4.81816Z"
          fill="white"
        />
        <path
          d="M18.5093 5.87482H4.44684C3.70117 5.87563 2.98627 6.17221 2.459 6.69948C1.93173 7.22675 1.63515 7.94164 1.63434 8.68732V17.1248C1.63515 17.8705 1.93173 18.5854 2.459 19.1126C2.98627 19.6399 3.70117 19.9365 4.44684 19.9373H18.5093C19.255 19.9365 19.9699 19.6399 20.4972 19.1126C21.0244 18.5854 21.321 17.8705 21.3218 17.1248V8.68732C21.321 7.94164 21.0244 7.22675 20.4972 6.69948C19.9699 6.17221 19.255 5.87563 18.5093 5.87482ZM16.4219 14.3123C16.1438 14.3123 15.8719 14.2298 15.6407 14.0753C15.4094 13.9208 15.2292 13.7012 15.1227 13.4442C15.0163 13.1873 14.9884 12.9045 15.0427 12.6317C15.097 12.3589 15.2309 12.1084 15.4276 11.9117C15.6242 11.715 15.8748 11.5811 16.1476 11.5268C16.4204 11.4726 16.7031 11.5004 16.9601 11.6069C17.217 11.7133 17.4367 11.8935 17.5912 12.1248C17.7457 12.356 17.8282 12.6279 17.8282 12.9061C17.8282 13.279 17.68 13.6367 17.4163 13.9004C17.1526 14.1642 16.7949 14.3123 16.4219 14.3123Z"
          fill="white"
        />
        <path
          d="M1.65622 11.6514V7.27881C1.65622 6.32651 2.18356 4.72998 4.01389 4.38413C5.56735 4.09277 7.10544 4.09277 7.10544 4.09277C7.10544 4.09277 8.11618 4.7959 7.28122 4.7959C6.44626 4.7959 6.46823 5.87256 7.28122 5.87256C8.09421 5.87256 7.28122 6.90527 7.28122 6.90527L4.00729 10.6187L1.65622 11.6514Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Today’s expenses",
    amount: 173000,
    percentage: 8,
    image: (
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.98425 19.9374C8.7609 19.9374 9.3905 19.3078 9.3905 18.5311C9.3905 17.7545 8.7609 17.1249 7.98425 17.1249C7.2076 17.1249 6.578 17.7545 6.578 18.5311C6.578 19.3078 7.2076 19.9374 7.98425 19.9374Z"
          fill="white"
        />
        <path
          d="M17.8281 19.9374C18.6047 19.9374 19.2343 19.3078 19.2343 18.5311C19.2343 17.7545 18.6047 17.1249 17.8281 17.1249C17.0514 17.1249 16.4218 17.7545 16.4218 18.5311C16.4218 19.3078 17.0514 19.9374 17.8281 19.9374Z"
          fill="white"
        />
        <path
          d="M20.3241 5.55793C20.2253 5.4371 20.1009 5.33978 19.9598 5.27305C19.8187 5.20631 19.6645 5.17182 19.5085 5.17209H6.13371L5.86433 3.64367C5.83561 3.48087 5.75043 3.33339 5.62377 3.22714C5.49712 3.1209 5.33707 3.06268 5.17175 3.06271H2.35925C2.17277 3.06271 1.99393 3.13679 1.86207 3.26865C1.73021 3.40052 1.65613 3.57936 1.65613 3.76584C1.65613 3.95232 1.73021 4.13116 1.86207 4.26302C1.99393 4.39488 2.17277 4.46896 2.35925 4.46896H4.58201L6.58855 15.8411C6.61727 16.0039 6.70244 16.1514 6.8291 16.2577C6.95576 16.3639 7.11581 16.4221 7.28113 16.4221H18.5311C18.7176 16.4221 18.8964 16.348 19.0283 16.2161C19.1602 16.0843 19.2342 15.9054 19.2342 15.719C19.2342 15.5325 19.1602 15.3536 19.0283 15.2218C18.8964 15.0899 18.7176 15.0158 18.5311 15.0158H7.87087L7.62302 13.6096H18.2428C18.4867 13.6093 18.7229 13.5247 18.9116 13.3703C19.1003 13.2158 19.2298 13.0009 19.2782 12.7619L20.5438 6.43376C20.5743 6.28061 20.5704 6.1226 20.5324 5.97114C20.4944 5.81968 20.4233 5.67854 20.3241 5.55793Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Today’s incomes",
    amount: -120000,
    percentage: 25,
    image: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.99999 3.33337V5.00004M9.99999 5.00004C11.6667 5.00004 12.6389 5.5556 12.9167 6.66671M9.99999 5.00004C7.49999 5.00004 7.08333 6.63048 7.08333 7.50004C7.08333 10.9503 12.9167 9.13749 12.9167 12.5C12.9167 13.3696 12.5 15 9.99999 15M9.99999 15V16.6667M9.99999 15C8.33333 15 7.36111 14.4445 7.08333 13.3334"
          stroke="#FFFFFF"
          stroke-width="2"
          stroke-linecap="square"
        />
      </svg>
    ),
  },
];

export { registrationInputs, loginInputs, navLinks, profileLinks, cards };
