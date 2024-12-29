// LeftBar.tsx
const menuItems = [
    { title: "Home", icon: <HomeIcon /> },
    { title: "Explore", icon: <ExploreIcon /> },
    { title: "Shorts", icon: <ShortsIcon /> },
    { title: "Subscriptions", icon: <SubscriptionsIcon /> },
    { title: "Library", icon: <LibraryIcon /> },
    { title: "History", icon: <HistoryIcon /> },
    { title: "Your Videos", icon: <YourVideosIcon /> },
    { title: "Watch Later", icon: <WatchLaterIcon /> },
    { title: "Liked Videos", icon: <LikedVideosIcon /> },
];

export const LeftBar = () => {
    return (
        <div className="bg-gray-950 w-48 hidden md:block">
            {menuItems.map((item, index) => (
                <BarWithIcon key={index} title={item.title} icon={item.icon} />
            ))}
            <Line />
        </div>
    );
};

export const Line = () => {
    return (
        <div className="w-full bg-gray-200 h-px dark:bg-gray-700 pl-3 pr-3 opacity-20">
            <div className="bg-red-600 h-0.5 dark:bg-gray-500" style={{ width: "100%" }}></div>
        </div>
    );
};

function BarWithIcon({ title, icon }: { title: string; icon: JSX.Element }) {
    return (
        <div className="overflow-x-visible">
            <BarElement title={title} icon={icon} />
        </div>
    );
}

function BarElement({ icon, title }: { icon: any; title: string }) {
    return (
        <div className="w-full rounded-xl bg-slate-950 hover:bg-gray-700 flex w-40 p-4 m-2 cursor-pointer">
            <div className="pr-2">{icon}</div>
            <div>{title}</div>
        </div>
    );
}

function HomeIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2.25 2.25L12 5.25l6.75 8.25L21 12M5.25 12H21m-4.5 0v6.75h-6V12H9v6.75H3.75V12" />
        </svg>
    );
}

function ExploreIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.75v2.25m0 0H7.5m2.25 0h2.25m-2.25 0V8.25m9 6.75v2.25m0 0h-2.25m2.25 0H21m-2.25 0v2.25" />
        </svg>
    );
}

function ShortsIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 8.25h7.5v7.5H8.25z" />
        </svg>
    );
}

function SubscriptionsIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3.75l7.5 7.5L3 18.75m18-15L13.5 11.25l7.5 7.5" />
        </svg>
    );
}

function LibraryIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h13.5m-13.5 3h13.5m-13.5 3h13.5m-13.5 3h13.5" />
        </svg>
    );
}

function HistoryIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v9m0 0l3 3m-3-3l-3 3m9-6a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}

function YourVideosIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9l-3 3 3 3M3 5.25h18M3 18.75h18" />
        </svg>
    );
}

function WatchLaterIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v6l3.75 3.75M5.25 5.25h13.5" />
        </svg>
    );
}

function LikedVideosIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 3.75h12m0 16.5H6m0-9H3.75m16.5 0H18m-6-6.75v13.5m0 0L9 14.25M15 17.25L12 14.25" />
        </svg>
    );
}
