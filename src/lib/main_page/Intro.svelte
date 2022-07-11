<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="wrapper">
	<table>
		<tr>
			<td class="left_column">
				<div class="column_wrapper">
					<p>Ekaterina</p>
					<p>Koshmanova</p>
					<div class="socials">
						<a href="https://www.instagram.com/k.koshmann" target="_blank" class="icon"
							><img src="{base}/img/instagramIcon.png" alt="inst" height="50" /></a
						>
						<a href="https://tlgg.ru/k_koshmann" target="_blank" class="icon"
							><img src="{base}/img/telegramIcon.png" alt="telegram" height="50" />
						</a>
						<a href="mailto:katykosh@yandex.ru" target="_blank" class="icon"
							><img src="{base}/img/emailIcon.png" alt="gmail" height="50" />
						</a>
					</div>
				</div>
			</td>
			<td class="middle_column" />
			<td class="right_column"><img src="{base}/img/photo.jpg" alt="me" height="250" /></td>
		</tr>
	</table>
</div>

<style>
	table {
		display: flex;
		justify-content: center;
	}

	.icon {
		margin-right: 5%;
	}

	.column_wrapper {
		margin-top: 25%;
	}

	.left_column {
		vertical-align: top;
		text-align: center;
		width: 50%;
	}

	.left_column p {
		font-size: 30px;
		line-height: 10px;
	}

	.middle_column {
		width: 10vw;
	}
</style>
