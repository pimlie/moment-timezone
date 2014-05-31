"use strict";

var helpers = require("../../helpers/helpers");

exports["Australia/Lindeman"] = {
	"1916" : helpers.makeTestYear("Australia/Lindeman", [
		["1916-12-31T14:00:59+00:00", "00:00:59", "EST", -600],
		["1916-12-31T14:01:00+00:00", "01:01:00", "EST", -660]
	]),

	"1917" : helpers.makeTestYear("Australia/Lindeman", [
		["1917-03-24T14:59:59+00:00", "01:59:59", "EST", -660],
		["1917-03-24T15:00:00+00:00", "01:00:00", "EST", -600]
	]),

	"1941" : helpers.makeTestYear("Australia/Lindeman", [
		["1941-12-31T15:59:59+00:00", "01:59:59", "EST", -600],
		["1941-12-31T16:00:00+00:00", "03:00:00", "EST", -660]
	]),

	"1942" : helpers.makeTestYear("Australia/Lindeman", [
		["1942-03-28T14:59:59+00:00", "01:59:59", "EST", -660],
		["1942-03-28T15:00:00+00:00", "01:00:00", "EST", -600],
		["1942-09-26T15:59:59+00:00", "01:59:59", "EST", -600],
		["1942-09-26T16:00:00+00:00", "03:00:00", "EST", -660]
	]),

	"1943" : helpers.makeTestYear("Australia/Lindeman", [
		["1943-03-27T14:59:59+00:00", "01:59:59", "EST", -660],
		["1943-03-27T15:00:00+00:00", "01:00:00", "EST", -600],
		["1943-10-02T15:59:59+00:00", "01:59:59", "EST", -600],
		["1943-10-02T16:00:00+00:00", "03:00:00", "EST", -660]
	]),

	"1944" : helpers.makeTestYear("Australia/Lindeman", [
		["1944-03-25T14:59:59+00:00", "01:59:59", "EST", -660],
		["1944-03-25T15:00:00+00:00", "01:00:00", "EST", -600]
	]),

	"1971" : helpers.makeTestYear("Australia/Lindeman", [
		["1971-10-30T15:59:59+00:00", "01:59:59", "EST", -600],
		["1971-10-30T16:00:00+00:00", "03:00:00", "EST", -660]
	]),

	"1972" : helpers.makeTestYear("Australia/Lindeman", [
		["1972-02-26T15:59:59+00:00", "02:59:59", "EST", -660],
		["1972-02-26T16:00:00+00:00", "02:00:00", "EST", -600]
	]),

	"1989" : helpers.makeTestYear("Australia/Lindeman", [
		["1989-10-28T15:59:59+00:00", "01:59:59", "EST", -600],
		["1989-10-28T16:00:00+00:00", "03:00:00", "EST", -660]
	]),

	"1990" : helpers.makeTestYear("Australia/Lindeman", [
		["1990-03-03T15:59:59+00:00", "02:59:59", "EST", -660],
		["1990-03-03T16:00:00+00:00", "02:00:00", "EST", -600],
		["1990-10-27T15:59:59+00:00", "01:59:59", "EST", -600],
		["1990-10-27T16:00:00+00:00", "03:00:00", "EST", -660]
	]),

	"1991" : helpers.makeTestYear("Australia/Lindeman", [
		["1991-03-02T15:59:59+00:00", "02:59:59", "EST", -660],
		["1991-03-02T16:00:00+00:00", "02:00:00", "EST", -600],
		["1991-10-26T15:59:59+00:00", "01:59:59", "EST", -600],
		["1991-10-26T16:00:00+00:00", "03:00:00", "EST", -660]
	]),

	"1992" : helpers.makeTestYear("Australia/Lindeman", [
		["1992-02-29T15:59:59+00:00", "02:59:59", "EST", -660],
		["1992-02-29T16:00:00+00:00", "02:00:00", "EST", -600],
		["1992-10-24T15:59:59+00:00", "01:59:59", "EST", -600],
		["1992-10-24T16:00:00+00:00", "03:00:00", "EST", -660]
	]),

	"1993" : helpers.makeTestYear("Australia/Lindeman", [
		["1993-03-06T15:59:59+00:00", "02:59:59", "EST", -660],
		["1993-03-06T16:00:00+00:00", "02:00:00", "EST", -600],
		["1993-10-30T15:59:59+00:00", "01:59:59", "EST", -600],
		["1993-10-30T16:00:00+00:00", "03:00:00", "EST", -660]
	]),

	"1994" : helpers.makeTestYear("Australia/Lindeman", [
		["1994-03-05T15:59:59+00:00", "02:59:59", "EST", -660],
		["1994-03-05T16:00:00+00:00", "02:00:00", "EST", -600]
	])
};