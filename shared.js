function loadGA() {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-VYCGD8ZQ75';
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){dataLayer.push(arguments);};
    gtag('js', new Date());
    gtag('config', 'G-VYCGD8ZQ75', { 'anonymize_ip': true });
}

function validateRating(inputId, hintId) {
    const input = document.getElementById(inputId);
    const hint = document.getElementById(hintId);
    const val = parseInt(input.value);
    const invalid = input.value !== '' && (isNaN(val) || val < 0 || val > 3100);
    input.classList.toggle('error', invalid);
    if (hint) { hint.textContent = invalid ? 'Must be between 0 – 3100' : ''; hint.classList.toggle('error', invalid); }
    return !invalid;
}

function updateGameButtons() {
    const input = document.getElementById('oppRating');
    const val = parseInt(input.value);
    const invalid = input.value !== '' && (isNaN(val) || val < 0 || val > 3100);
    document.querySelectorAll('.res-btn').forEach(b => b.disabled = invalid);
}

function getRatingBucket(r) {
    if (r < 1000) return '<1000';
    if (r < 1200) return '1000-1199';
    if (r < 1400) return '1200-1399';
    if (r < 1600) return '1400-1599';
    if (r < 1800) return '1600-1799';
    if (r < 2000) return '1800-1999';
    if (r < 2200) return '2000-2199';
    if (r < 2400) return '2200-2399';
    if (r < 2500) return '2400-2499';
    if (r < 2600) return '2500-2599';
    if (r < 2700) return '2600-2699';
    if (r < 2800) return '2700-2799';
    if (r < 2900) return '2800-2899';
    return '2900+';
}



// Cookie consent — this script loads at end of body so DOM is ready
document.getElementById('cookie-accept').onclick = function() {
    localStorage.setItem('cookie_consent', 'accepted');
    document.getElementById('cookie-banner').style.display = 'none';
    loadGA();
};
document.getElementById('cookie-reject').onclick = function() {
    localStorage.setItem('cookie_consent', 'rejected');
    document.getElementById('cookie-banner').style.display = 'none';
};
(function() {
    var c = localStorage.getItem('cookie_consent');
    if (c === 'accepted') { loadGA(); return; }
    if (c === 'rejected') return;
    document.getElementById('cookie-banner').style.display = 'flex';
})();
