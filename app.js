const asosiyTana = document.getElementById('iqtibos-section');
const iqtiboslar = [
{sitata:"Sabr qilgan odam hech qachon yutqazmaydi", author:"Admin"},
{sitata:"Jim yurgan uzoqqa boradi", author:"Admin"},
{sitata:"Orzular qo‘rqoq odamlarni yoqtirmaydi", author:"Admin"},
{sitata:"O‘zingga ishon, qolganlari o‘z-o‘zidan keladi", author:"Admin"},
{sitata:"Bugun qilmagan ish ertaga afsus bo‘ladi", author:"Admin"},
{sitata:"Mehnat – sukutdagi eng baland duo", author:"Admin"},
{sitata:"Yutqazish — bu ham tajriba", author:"Admin"},
{sitata:"Har tong yangi imkon", author:"Admin"},
{sitata:"O‘zini yenggan odam hammani yengadi", author:"Admin"},
{sitata:"Intizom iste’doddan kuchli", author:"Admin"},

{sitata:"Niyat to‘g‘ri bo‘lsa, yo‘l ham topiladi", author:"Begʻuborim"},
{sitata:"Sabrning oxiri — sharaf", author:"Begʻuborim"},
{sitata:"Qalb tinch bo‘lsa, hayot chiroyli", author:"Begʻuborim"},
{sitata:"Yuragingni toza tut", author:"Begʻuborim"},
{sitata:"Alloh kechiktiradi, lekin unutmaydi", author:"Begʻuborim"},
{sitata:"Duo – ko‘rinmas qurol", author:"Begʻuborim"},
{sitata:"Yaxshilik hech qachon yo‘qolmaydi", author:"Begʻuborim"},
{sitata:"Sukuting ham ibodat bo‘lishi mumkin", author:"Begʻuborim"},
{sitata:"Qalb ko‘rsa, ko‘z shart emas", author:"Begʻuborim"},
{sitata:"Imon eng katta boylik", author:"Begʻuborim"},

{sitata:"Tasavvur bilimdan ustun", author:"Albert Einstein"},
{sitata:"Xato qilmagan odam hech narsa qilmagan", author:"Albert Einstein"},
{sitata:"Hayot velosipedga o‘xshaydi — muvozanat uchun harakat kerak", author:"Albert Einstein"},

{sitata:"Bugun qiyin bo‘lsa, ertaga oson bo‘ladi", author:"Admin"},
{sitata:"O‘zingni kechagi holating bilan solishtir", author:"Admin"},
{sitata:"Bahona – orzuning dushmani", author:"Admin"},
{sitata:"Kam gapir, ko‘p ishla", author:"Admin"},
{sitata:"Reja bo‘lmasa, yo‘qotish bo‘ladi", author:"Admin"},
{sitata:"Yaxshi odat — jim qurilgan boylik", author:"Admin"},
{sitata:"Vaqt eng qimmat valyuta", author:"Admin"},
{sitata:"Bugun boshlagan yutadi", author:"Admin"},
{sitata:"Yurak kuchli bo‘lsa, yo‘l ochiladi", author:"Admin"},
{sitata:"O‘zgarish ichingdan boshlanadi", author:"Admin"},

{sitata:"Pul uxlamaydi", author:"Warren Buffett"},
{sitata:"Xavf — o‘sish narxi", author:"Warren Buffett"},
];

iqtiboslar.forEach(iqtibos => {
	
	asosiyTana.innerHTML += `<div class="iqtibos-div">
								<p class="iqtibos">
									" ${iqtibos.sitata} "
									<span class="author">@${iqtibos.author}</span>
								</p>
							</div>`;
	
	
});