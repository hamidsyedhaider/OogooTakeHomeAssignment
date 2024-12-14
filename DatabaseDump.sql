--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4
-- Dumped by pg_dump version 16.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: vehicles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vehicles (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    model character varying(100) NOT NULL,
    number character varying(50) NOT NULL,
    color character varying(50)
);


ALTER TABLE public.vehicles OWNER TO postgres;

--
-- Name: vehicles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.vehicles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.vehicles_id_seq OWNER TO postgres;

--
-- Name: vehicles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.vehicles_id_seq OWNED BY public.vehicles.id;


--
-- Name: vehicles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vehicles ALTER COLUMN id SET DEFAULT nextval('public.vehicles_id_seq'::regclass);


--
-- Data for Name: vehicles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vehicles (id, name, model, number, color) FROM stdin;
9	Car 1	Model A	ABC123	Red
10	Car 2	Model B	XYZ456	Blue
11	Car 3	Model C	LMN789	Green
12	Car 4	Model D	QRS012	Black
13	Car 5	Model E	TUV345	White
14	Car 6	Model F	GHI678	Silver
15	Car 7	Model G	JKL901	Yellow
16	Car 8	Model H	MNO234	Purple
17	Car 9	Model I	PQR567	Orange
18	Car 10	Model J	STU890	Pink
19	Car 11	Model K	VWX123	Red
20	Car 12	Model L	YZA456	Blue
21	Car 13	Model M	BCD789	Green
22	Car 14	Model N	DEF012	Black
23	Car 15	Model O	GHI345	White
24	Car 16	Model P	JKL678	Silver
25	Car 17	Model Q	LMN901	Yellow
26	Car 18	Model R	OPQ234	Purple
27	Car 19	Model S	RST567	Orange
28	Car 20	Model T	UVW890	Pink
\.


--
-- Name: vehicles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.vehicles_id_seq', 28, true);


--
-- Name: vehicles vehicles_number_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vehicles
    ADD CONSTRAINT vehicles_number_key UNIQUE (number);


--
-- Name: vehicles vehicles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vehicles
    ADD CONSTRAINT vehicles_pkey PRIMARY KEY (id);


--
-- Name: idx_vehicles_color; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_vehicles_color ON public.vehicles USING btree (color);


--
-- Name: idx_vehicles_model; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_vehicles_model ON public.vehicles USING btree (model);


--
-- Name: idx_vehicles_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_vehicles_name ON public.vehicles USING btree (name);


--
-- Name: idx_vehicles_number; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_vehicles_number ON public.vehicles USING btree (number);


--
-- PostgreSQL database dump complete
--

