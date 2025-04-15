import { cn } from "@/lib/utils"; // Importing utility function to conditionally apply classes

export default function Wrapper({
    children, // The content to be wrapped
    className, // Optional additional class names to customize the wrapper
}:{
    children: React.ReactNode; 
    className?: string;
}) {
    return <div className={cn("wrapper", className)}>{children}</div>; 
}
