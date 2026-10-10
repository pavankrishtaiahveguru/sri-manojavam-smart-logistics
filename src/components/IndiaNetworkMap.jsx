"use client";

import { motion } from "framer-motion";
import { geoMercator } from "d3-geo";
import { feature as topojsonFeature } from "topojson-client";
import world from "world-atlas/countries-110m.json";

export const mapWidth = 666;
export const mapHeight = 777;

const india = topojsonFeature(world, world.objects.countries).features.find(
  (country) => Number(country.id) === 356,
);
const projection = geoMercator().fitExtent(
  [
    [38, 28],
    [628, 749],
  ],
  india,
);

export const locations = [
  {
    id: "delhi",
    city: "Delhi",
    state: "Delhi",
    type: "Strategic Location",
    description: "Northern India logistics connectivity",
    latitude: 28.6139,
    longitude: 77.209,
    label: { dx: 15, dy: -14, anchor: "start" },
    featured: false,
  },
  {
    id: "mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    type: "Strategic Location",
    description: "Western India logistics connectivity",
    latitude: 19.076,
    longitude: 72.8777,
    label: { dx: -15, dy: 3, anchor: "end" },
    featured: false,
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    type: "Head Office",
    description: "Central operations and logistics coordination",
    latitude: 17.385,
    longitude: 78.4867,
    label: { dx: -17, dy: -17, anchor: "end" },
    featured: true,
  },
  {
    id: "chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    type: "Strategic Location",
    description: "Southern India logistics connectivity",
    latitude: 13.0827,
    longitude: 80.2707,
    label: { dx: 15, dy: 16, anchor: "start" },
    featured: false,
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Strategic Location",
    description: "South India transportation network",
    latitude: 12.9716,
    longitude: 77.5946,
    label: { dx: -14, dy: 17, anchor: "end" },
    featured: false,
  },
  {
    id: "visakhapatnam",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    type: "Strategic Location",
    description: "East coast logistics connectivity",
    latitude: 17.6868,
    longitude: 83.2185,
    label: { dx: 16, dy: -14, anchor: "start" },
    featured: false,
  },
].map((location) => ({
  ...location,
  point: projection([location.longitude, location.latitude]).map((value) =>
    Number(value.toFixed(3)),
  ),
}));

const headOffice = locations.find((location) => location.featured);

export default function IndiaNetworkMap({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox={`0 0 ${mapWidth} ${mapHeight}`}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="India map showing SMSL's six strategic locations"
    >
      <image
        href="/images/india-map.svg"
        x="0"
        y="0"
        width={mapWidth}
        height={mapHeight}
        preserveAspectRatio="none"
      />

      {[40, 58, 77].map((radius, index) => (
        <circle
          key={radius}
          cx={headOffice.point[0]}
          cy={headOffice.point[1]}
          r={radius}
          fill="none"
          stroke="#075FAE"
          strokeOpacity={[0.2, 0.1, 0.05][index]}
          strokeWidth="1.5"
        />
      ))}

      {locations
        .filter((location) => !location.featured)
        .map((location) => (
          <motion.line
            key={`line-${location.city}`}
            x1={headOffice.point[0]}
            y1={headOffice.point[1]}
            x2={location.point[0]}
            y2={location.point[1]}
            stroke="#F47721"
            strokeWidth="2.4"
            strokeDasharray="10 10"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.9 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.25 }}
          />
        ))}

      {locations.map((location, index) => (
        <g key={location.city}>
          <circle
            cx={location.point[0]}
            cy={location.point[1]}
            r={location.featured ? 22 : 19}
            fill={location.featured ? "#F47721" : "#075FAE"}
            opacity="0.16"
          />
          <motion.circle
            cx={location.point[0]}
            cy={location.point[1]}
            fill={location.featured ? "#F47721" : "#075FAE"}
            initial={{ r: 14, opacity: 0.45 }}
            animate={{ r: [14, 30, 14], opacity: [0.45, 0, 0.45] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              delay: index * 0.25,
            }}
          />
          <circle
            cx={location.point[0]}
            cy={location.point[1]}
            r={location.featured ? 14 : 11}
            fill={location.featured ? "#F47721" : "#075FAE"}
            stroke="white"
            strokeWidth="3"
          />
          <text
            x={location.point[0] + location.label.dx}
            y={location.point[1] + location.label.dy}
            textAnchor={location.label.anchor}
            dominantBaseline="middle"
            fill={location.featured ? "#F9A66C" : "#E2E8F0"}
            fontSize="15"
            fontWeight="700"
            paintOrder="stroke"
            stroke="#071A35"
            strokeWidth="3"
            strokeLinejoin="round"
          >
            {location.city}
          </text>
        </g>
      ))}
    </svg>
  );
}
