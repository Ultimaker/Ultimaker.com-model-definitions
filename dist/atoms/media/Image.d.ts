export declare enum FocusArea {
    center = "",
    top = "top",
    right = "right",
    bottom = "bottom",
    left = "left",
    topRight = "top_right",
    topLeft = "top_left",
    bottomRight = "bottom_right",
    bottomLeft = "bottom_left",
    faceLargest = "face",
    faces = "faces"
}
export declare class Image {
    alt: string;
    url: string;
    mimeType: string;
    focusArea?: FocusArea;
}
