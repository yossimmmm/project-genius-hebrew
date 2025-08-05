import React from "react";

// List of placeholder icons; using emoji keeps the component lightweight
const icons = [
  "📱",
  "📷",
  "🎵",
  "💬",
  "📧",
  "🗺️",
  "📞",
  "🎮",
  "📚",
  "🛒",
  "🎬",
  "⚙️",
];

const IosIconGrid: React.FC = () => {
  return (
    // Full-screen flex container with a simple gradient background
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300">
      {/* Blurred translucent panel that mimics iOS glass effect */}
      <div className="ios-glass p-6 rounded-3xl shadow-xl">
        {/* Grid layout similar to the iOS home screen */}
        <div className="grid grid-cols-4 gap-4">
          {icons.map((icon, i) => (
            /* Each icon sits in a rounded square with a subtle shadow */
            <button
              key={i}
              className="w-16 h-16 rounded-2xl bg-white/80 shadow-md flex items-center justify-center text-2xl transition-transform duration-150 ease-out hover:scale-110 active:scale-95 touch-manipulation"
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IosIconGrid;
