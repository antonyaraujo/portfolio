export function Background() {
    return (
        <div className="fixed inset-0 z-[-1] bg-background">
            <div 
                className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,255,149,0.15),rgba(255,255,255,0))]"
            />
            <div 
                className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,20,20,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,20,20,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem]"
            />
        </div>
    );
}
