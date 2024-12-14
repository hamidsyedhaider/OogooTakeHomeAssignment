CREATE TABLE vehicles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    number VARCHAR(50) NOT NULL UNIQUE,
    color VARCHAR(50)
);

CREATE INDEX idx_vehicles_name ON vehicles (name);
CREATE INDEX idx_vehicles_model ON vehicles (model);
CREATE INDEX idx_vehicles_number ON vehicles (number);
CREATE INDEX idx_vehicles_color ON vehicles (color);

INSERT INTO vehicles (name, model, number, color)
VALUES
    ('Car 1', 'Model A', 'ABC123', 'Red'),
    ('Car 2', 'Model B', 'XYZ456', 'Blue'),
    ('Car 3', 'Model C', 'LMN789', 'Green'),
    ('Car 4', 'Model D', 'QRS012', 'Black'),
    ('Car 5', 'Model E', 'TUV345', 'White'),
    ('Car 6', 'Model F', 'GHI678', 'Silver'),
    ('Car 7', 'Model G', 'JKL901', 'Yellow'),
    ('Car 8', 'Model H', 'MNO234', 'Purple'),
    ('Car 9', 'Model I', 'PQR567', 'Orange'),
    ('Car 10', 'Model J', 'STU890', 'Pink'),
    ('Car 11', 'Model K', 'VWX123', 'Red'),
    ('Car 12', 'Model L', 'YZA456', 'Blue'),
    ('Car 13', 'Model M', 'BCD789', 'Green'),
    ('Car 14', 'Model N', 'DEF012', 'Black'),
    ('Car 15', 'Model O', 'GHI345', 'White'),
    ('Car 16', 'Model P', 'JKL678', 'Silver'),
    ('Car 17', 'Model Q', 'LMN901', 'Yellow'),
    ('Car 18', 'Model R', 'OPQ234', 'Purple'),
    ('Car 19', 'Model S', 'RST567', 'Orange'),
    ('Car 20', 'Model T', 'UVW890', 'Pink');