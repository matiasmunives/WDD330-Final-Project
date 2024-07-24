CREATE TYPE public.account_type AS ENUM
    ('AA', 'TFA', 'TFM', 'ATFM', 'SM');

-- Table structure for table `Temples`
CREATE TABLE public.temples (
    temp_id INT GENERATED BY DEFAULT AS IDENTITY,
    temp_name CHARACTER VARYING NOT NULL,
    temp_address CHARACTER NOT NULL,
    temp_city CHARACTER NOT NULL,
    temp_country CHARACTER NOT NULL,
    temp_bdate date NOT NULL,
    temp_ddate date NOT NULL,
    temp_phone INT VARYING NOT NULL
    CONSTRAINT temp_pk PRIMARY KEY (temp_id)
);

-- Table structure for table `Properties`
CREATE TABLE public.properties (
    prop_id INT GENERATED BY DEFAULT AS IDENTITY,
    prop_name CHARACTER VARYING NOT NULL,
    prop_size FLOAT NOT NULL,
    prop_comments CHARACTER VARYING NOT NULL,
    temp_id integer NOT NULL,
    CONSTRAINT prop_pk PRIMARY KEY (prop_id)
);

-- Create relationship between `Temples` and `Properties` tables
ALTER TABLE IF EXISTS public.properties
    ADD CONSTRAINT fk_temples FOREIGN KEY (temp_id)
    REFERENCES public.temples (temp_id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE NO ACTION;

-- Table structure for table `Rooms`
CREATE TABLE public.room (
    room_id INT GENERATED BY DEFAULT AS IDENTITY,
    room_name CHARACTER VARYING NOT NULL,
    room_width FLOAT NOT NULL,
    room_large FLOAT NOT NULL,
    room_height FLOAT NOT NULL,
    room_floor FLOAT NOT NULL,
    room_comments CHARACTER VARYING NOT NULL,
    prop_id integer NOT NULL,
    roomtype_id integer NOT NULL,
    CONSTRAINT prop_pk PRIMARY KEY (prop_id)
);

-- Table structure for table `Room Type`
CREATE TABLE public.roomtype (
    roomtype_id INT GENERATED BY DEFAULT AS IDENTITY,
    roomtype_name CHARACTER VARYING NOT NULL,
    CONSTRAINT room_pk PRIMARY KEY (room_id)
);

-- Create relationship between `Properties` and `Rooms` tables
ALTER TABLE IF EXISTS public.room
    ADD CONSTRAINT fk_properties FOREIGN KEY (prop_id)
    REFERENCES public.properties (prop_id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE NO ACTION;

-- Create relationship between `Rooms` and `Room Type` tables
ALTER TABLE IF EXISTS public.room
    ADD CONSTRAINT fk_roomtype FOREIGN KEY (roomtype_id)
    REFERENCES public.roomtype (roomtype_id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE NO ACTION;

-- Data for table `Room Type`

    INSERT INTO PUBLIC.room_type (roomtype_name)
    VALUES (
        'Circulation'
    ), (
        'Dinning Room'
    ), (
        'Kitchen Room'
    ), (
        'Bedroom'
    ), (
        'Living Room'
    ), ('
        Bathroom'
    ), (
        'Ordinances'
    ),(
        'Dressing Room'
    ), (
        'Mechanical Room'
    ), (
        'Mezzanine'
    ), (
        'Admin Office'
    ), (
        'Office'
    ), (
        'Work Shop'
    ), (
        'Laundry'
    ), (
        'Waiting Room'
    ), (
        'Services Room'
    ), (
        'Chapel'
    ), (
        'Baptistery'
    );

-- Table structure for table `inventory`
CREATE TABLE IF NOT EXISTS public.inventory (
    inv_id INT NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    inv_number character varying NOT NULL,
    inv_name character varying NOT NULL,
    inv_description text NOT NULL,
    unittype_id INT NOT NULL,
    CONSTRAINT inventory_pkey PRIMARY KEY (inv_id)
);

INSERT INTO Items (inv_number, inv_name, inv_description, unittype_id)

VALUES
    (
    '1', 'Ceiling, Gypsum or Plaster, Painted', 'Description 1', 'sqr2'),
    ('2', 'Ceiling, Wood', 'Description 2', 'sqr2'),
    ('3', 'Ceiling, Adhered Acoustic Panel', 'Description 3', 'sqr2'),
    ('4', 'Ceiling, Hanging Acoustic Panel', 'Description 4', 'sqr2'),
    ('5', 'Ceiling, Acoustic Spray', 'Description 5', 'sqr2'),
    ('6', 'Floor, Concrete', 'Description 6', 'sqr2'),
    ('7', 'Floor, Vinyl Sheet', 'Description 7', 'sqr2'),
    ('8', 'Floor, Wood', 'Description 8', 'sqr2'),
    ('9', 'Floor, Marble', 'Description 9', 'sqr2'),
    ('10', 'Floor, Terrazzo', 'Description 10', 'sqr2'
    );

-- Table structure for table `unit type`
CREATE TABLE public.unittype (
    unittype_id INT GENERATED BY DEFAULT AS IDENTITY,
    unittype_name CHARACTER VARYING NOT NULL,
    CONSTRAINT unittype_pk PRIMARY KEY (unittype_id)
);

-- Create relationship between `inventory` and `unit type` tables
ALTER TABLE IF EXISTS public.inventory
    ADD CONSTRAINT fk_unittype FOREIGN KEY (unittype_id)
    REFERENCES public.unittype (unittype_id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE NO ACTION;

-- Data for table `Unit Type`

    INSERT INTO PUBLIC.unittype (unittype_name)
    VALUES (
        'foot'
    ), (
        'inch'
    ), (
        'yard'
    ), (
        'sqft'
    ), (
        'sqfd'
    ), (
        'in2'
    ), (
        'acre'
    ), (
        'each'
    );

-- Create table between `inventory` and `room inventory` tables
CREATE TABLE public.room_inventory (
    room_inv_id INT GENERATED BY DEFAULT AS IDENTITY,
    room_id INT NOT NULL,
    inv_id INT NOT NULL,
    quantity INT NOT NULL,
    comments INT NOT NULL,
    CONSTRAINT room_inv_pk PRIMARY KEY (room_inv_id)
);

-- Create relations between room_inventory and the other tables

ALTER TABLE IF EXISTS public.room_inventory
    ADD CONSTRAINT fk_room_inventory FOREIGN KEY (room_id)
    REFERENCES public.room (room_id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE NO ACTION;

ALTER TABLE IF EXISTS public.room_inventory
    ADD CONSTRAINT fk_inventory FOREIGN KEY (inv_id)
    REFERENCES public.inventory (inv_id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE NO ACTION;

-- Table structure for table `account`
CREATE TABLE IF NOT EXISTS public.account
(
    account_id integer NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    account_firstname character varying NOT NULL,
    account_lastname character varying NOT NULL,
    account_email character varying NOT NULL,
    account_password character varying NOT NULL,
    account_type account_type NOT NULL DEFAULT 'TFM'::account_type,
    CONSTRAINT account_pkey PRIMARY KEY (account_id)
);