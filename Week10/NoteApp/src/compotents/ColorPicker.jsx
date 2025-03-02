import React, { useState } from "react";


const colors = [ '#F06292', '#BA68C8', '#FFD54F', '#4FC3F7', '#AED581'];

const ColorPicker = ({ onColorSelect }) => {
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorClick = (color) => {
        setSelectedColor(color);
        onColorSelect(color);
    };

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            {colors.map((color) => (
                <button
                    key={color}
                    style={{ backgroundColor: color, border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer',outline: 'none', position: 'relative' }}
                    onClick={() => handleColorClick(color)}
                >
                    {selectedColor === color && (
                        <span
                            style={{
                                color: 'gray',
                                fontSize: '14px',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                pointerEvents: 'none',
                            }}
                        >
                            ✓
                        </span>
                    )}
                </button>
            ))}
        </div>
    );
};

export default ColorPicker;