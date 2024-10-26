"use client";

import api from "@/generated/aspida/$api";
import aspida from "@aspida/axios";
import axios from "axios";
import { type MouseEventHandler, useState } from "react";

export default function Home() {
	const [res, setRes] = useState<string>();
	const [err, setErr] = useState<unknown>();

	const onClickHandler: MouseEventHandler<HTMLButtonElement> = async (
		event,
	) => {
		event.preventDefault();
		setRes("");
		setErr(undefined);

		try {
			const response = await ApiClient.$get();
			setRes(response.message);
		} catch (error) {
			setErr(error);
			console.log(error);
		}
	};

	return (
		<main>
			<div>Hello world!</div>
			<button type="button" onClick={onClickHandler}>
				APIコール
			</button>
			<h3>メッセージ：{res ? res : "（なし）"}</h3>
			<p>エラー：{err ? String(err) : "（なし）"}</p>
		</main>
	);
}

// TODO
const BaseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

const ApiClient = api(
	aspida(axios, {
		baseURL: BaseURL,
	}),
);
