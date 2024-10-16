const $ = document

const contentArray = [
    {
        id: 1,
        name: 'zyarat-ashora',
        content: [
            'اَلسَّلامُ عَلَیْکَ یا اَباعَبْدِاللَّهِ اَلسَّلامُ عَلَیْکَ یَابْنَ رَسُولِ اللَّهِ اَلسَّلامُ عَلَیْکَ یا خِیَرَةَ اللَّهِ و َابْنَ خِیَرَتِهِ اَلسَّلامُ عَلَیْکَ یَابْنَ اَمیرِالْمُؤْمِنینَ و َابْنَ سَیِّدِ الْوَصِیّینَ',
            'اَلسَّلامُ عَلَیْکَ یَابْنَ فاطِمَةَ سَیِّدَةِ نِساَّءِ الْعالَمینَ اَلسَّلامُ عَلَیْکَ یا ثارَ اللَّهِ وَ ابْنَ ثارِهِ وَ الْوِتْرَ الْمَوْتُورَ',
            'اَلسَّلامُ عَلَیْکَ وَعَلَی الاَْرْواحِ الَّتی حَلَّتْ بِفِناَّئِکَ عَلَیْکُمْ مِنّی جَمیعاً سَلامُ اللَّهِ اَبَداً ما بَقیتُ وَ بَقِیَ اللَّیْلُ وَالنَّهارُ',
            'یا اَباعَبْدِاللَّهِ لَقَدْ عَظُمَتِ الرَّزِیَّةُ وَ جَلَّتْ وَ عَظُمَتِ الْمُصیبَةُ بِکَ (بِکُمْ) عَلَیْنا وَ عَلی جَمیعِ اَهْل ِالاِْسْلامِ',
            'و َجَلَّتْ وَ عَظُمَتْ مُصیبَتُکَ فِی السَّمواتِ عَلی جَمیعِ اَهْلِ السَّمواتِ فَلَعَنَ اللَّهُ اُمَّةً اَسَّسَتْ اَساسَ الظُّلْمِ وَ الْجَوْرِ عَلَیْکُمْ اَهْلَ الْبَیْتِ',
            'وَ لَعَنَاللَّهُ اُمَّةً دَفَعَتْکُمْ عَنْ مَقامِکُمْ و َاَزالَتْکُمْ عَنْ مَراتِبِکُمُ الَّتی رَتَّبَکُمُ اللَّهُ فیها',
            'و َلَعَنَ اللَّهُ اُمَّةً قَتَلَتْکُمْ وَ لَعَنَ اللَّهُ الْمُمَهِّدینَ لَهُمْ بِالتَّمْکینِ مِنْ قِتالِکُمْ',
            'بَرِئْتُ اِلَی اللَّهِ وَ اِلَیْکُمْ مِنْهُمْ وَ مِنْ اَشْیاعِهِمْ وَ اَتْباعِهِمْ وَ اَوْلِیاَّئِهِم',
            'یا اَباعَبْدِاللَّهِ اِنّی سِلْمٌ لِمَنْ سالَمَکُمْ وَ حَرْبٌ لِمَنْ حارَبَکُمْ اِلی یَوْمِ الْقِیامَةِ',
            'وَ لَعَنَ اللَّهُ آلَ زِیادٍ وَ آلَ مَرْوانَ وَ لَعَنَ اللَّهُ بَنی اُمَیَّةَ قاطِبَةً وَ لَعَنَ اللَّهُ ابْنَ مَرْجانَةَ',
            'وَ لَعَنَ اللَّهُ عُمَرَ بْنَ سَعْدٍ وَ لَعَنَ اللَّهُ شِمْراً (شَمِراً)وَ لَعَنَ اللَّهُ اُمَّةً اَسْرَجَتْ وَ اَلْجَمَتْ وَ تَنَقَّبَتْ لِقِتالِکَ',
            'بِاَبی اَنْتَ وَ اُمّی لَقَدْ عَظُمَ مُصابی بِکَ فَاَسْئَلُ اللَّهَ الَّذی اَکْرَمَ مَقامَکَ وَ اَکْرَمَنی بِکَ',
            'اَللّهُمَّ اجْعَلْنی عِنْدَکَ وَجیهاً بِالْحُسَیْنِ عَلَیْهِ السَّلامُ فِی الدُّنْیا وَ الاْخِرَةِ',
            'یا اَباعَبْدِاللَّهِ اِنّی اَتَقَرَّبُ اِلی اللَّهِ وَ اِلی رَسُولِهِ وَ اِلی امیرِالْمُؤْمِنینَ وَ اِلی فاطِمَةَ وَ اِلَی الْحَسَنِ وَ اِلَیْکَ بِمُوالاتِکَ',
            'وَ بِالْبَراَّئَةِ (مِمَّنْ قاتَلَکَ وَ نَصَبَ لَکَ الْحَرْبَ وَ بِالْبَرائَةِ مِمَّنْ اَسَّسَ اَساسَ الظُّلْمِ وَ الْجَوْرِعَلَیْکُمْ وَ اَبْرَءُ اِلَی اللّهِ وَ اِلی رَسُولِهِ) مِمَّنْ اَسَسَّ اَساسَ ذلِکَ وَ بَنی عَلَیْهِ بُنْیانَهُ وَ جَری فی ظُلْمِهِ وَ جَوْرِهِ عَلَیْکُمْ وَ علی اَشْیاعِکُمْ  بَرِئْتُ اِلَی اللَّهِ وَ اِلَیْکُمْ مِنْهُمْ',
            'وَ اَتَقَرَّبُ اِلَی اللَّهِ ثُمَّ اِلَیْکُمْ بِمُوالاتِکُمْ وَ مُوالاةِ وَلِیِّکُمْ',
            'وَ بِالْبَرآئَةِ مِنْ اَعْداَّئِکُمْ وَ النّاصِبینَ لَکُمُ الْحَرْبَ وَ بِالْبَرآئَةِ مِنْ اَشْیاعِهِمْ وَ اَتْباعِهِمْ',
            'اِنّی سِلْمٌ لِمَنْ سالَمَکُمْ وَحَرْبٌ لِمَنْ حارَبَکُمْ وَ وَلِیُّ لِمَنْ والاکُمْ وَ عَدُوُّ لِمَنْ عاداکُمْ',
            'فَاَسْئَلُ اللَّهَ الَّذی اَکْرَمَنی بِمَعْرِفَتِکُمْ وَمَعْرِفَةِ اَوْلِیاَّئِکُمْ وَ رَزَقَنِی الْبَراَّئَةَ مِنْ اَعْداَّئِکُمْ',
            'اَنْ یَجْعَلَنی مَعَکُمْ فِی الدُّنْیا وَالاْخِرَةِ وَاَنْ یُثَبِّتَ لی عِنْدَکُمْ قَدَمَ صِدْقٍ فِی الدُّنْیا وَ الاْخِرَةِ',
            'وَ اَسْئَلُهُ اَنْ یُبَلِّغَنِی الْمَقامَ الْمَحْمُودَ لَکُمْ عِنْدَ اللَّهِ وَ اَنْ یَرْزُقَنی طَلَبَ ثاری مَعَ اِمامٍ هُدیً ظاهِرٍ ناطِقٍ (بِالْحَقِّ) مِنْکُمْ',
            'وَ اَسْئَلُ اللَّهَ بِحَقِّکُمْ وَبِالشَّاْنِ الَّذی لَکُمْ عِنْدَهُ اَنْ یُعْطِیَنی بِمُصابی بِکُمْ اَفْضَلَ ما یُعْطی مُصاباً بِمُصیبَتِهِ مُصیبَةً ما اَعْظَمَها',
            'وَ اَعْظَمَ رَزِیَّتَها فِی الاِْسْلامِ وَ فی جَمیعِ السَّمواتِ وَ الاَْرْضِ (الْأَرَضِینَ)اَللّهُمَّ اجْعَلْنی فی مَقامی هذا مِمَّنْ تَنالُهُ مِنْکَ صَلَواتٌ وَ رَحْمَةٌ وَ مَغْفِرَةٌ',
            'اَللّهُمَّ اجْعَلْ مَحْیایَ مَحْیا مُحَمَّدٍ وَ آلِ مُحَمَّدٍ وَ مَماتی مَماتَ مُحَمَّدٍ وَ آلِ مُحَمَّدٍ',
            'اَللّهُمَّ اِنَّ هذا یَوْمٌ تَبرَّکَتْ بِهِ (فِیهِ)بَنُو اُمَیَّةَ وَ ابْنُ آکِلَةِ الَْآکبادِ اللَّعینُ ابْنُ اللَّعینِ عَلی لِسانِکَ وَ لِسانِ نَبِیِّکَ صَلَّی اللَّهُ عَلَیْهِ وَ آلِهِ',
            'فی کُلِّ مَوْطِنٍ وَ مَوْقِفٍ وَقَفَ فیهِ نَبِیُّکَ صَلَّی اللَّهُ عَلَیْهِ وَ آلِهِ',
            'اَللّهُمَّ الْعَنْ اَباسُفْیانَ وَ مُعاوِیَةَ وَ یَزیدَ بْنَ مُعاوِیَةَ عَلَیْهِمْ مِنْکَ اللَّعْنَةُ اَبَدَ الاْبِدینَ',
            'وَ هذا یَوْمٌ فَرِحَتْ بِهِ آلُ زِیادٍ وَ آلُ مَرْوانَ بِقَتْلِهِمُ الْحُسَیْنَ صَلَواتُ اللَّهِ عَلَیْهِ (عَلَیْهِ السَّلاَمُ)',
            'اَللّهُمَّ فَضاعِفْ عَلَیْهِمُ اللَّعْنَ مِنْکَ وَ الْعَذابَ (الاَْلیمَ) اَللّهُمَّ اِنّی اَتَقَرَّبُ اِلَیْکَ فی هذَا الْیَوْمِ وَ فی مَوْقِفی هذا',
            'وَ اَیّامِ حَیاتی بِالْبَراَّئَهِ مِنْهُمْ وَاللَّعْنَةِ عَلَیْهِمْ وَ بِالْمُوالاتِ لِنَبِیِّکَ وَ آلِ نَبِیِّکَ عَلَیْهِ وَ عَلَیْهِمُ اَلسَّلامُ',
            'پس می گوئی صد مرتبه :',
            'اَللّهُمَّ الْعَنْ اَوَّلَ ظالِمٍ ظَلَمَ حَقَّ مُحَمَّدٍ وَ آلِ مُحَمَّدٍ وَ آخِرَ تابِعٍ لَهُ عَلی ذلِکَ',
            'اَللّهُمَّ الْعَنِ الْعِصابَةَ الَّتی (الَّذِینَ)جاهَدَتِ الْحُسَیْنَ وَ شایَعَتْ وَ بایَعَتْ وَ تابَعَتْ (تَایَعَتْ)عَلی قَتْلِهِ اَللّهُمَّ الْعَنْهُمْ جَمیعاً',
            'پس می گوئی صد مرتبه :',
            'اَلسَّلامُ عَلَیْکَ یا اَباعَبْدِاللَّهِ وَ عَلَی الاَْرْواحِ الَّتی حَلَّتْ بِفِناَّئِکَ عَلَیْکَ مِنّی سَلامُ اللَّهِ (اَبَداً) ما بَقیتُ وَ بَقِیَ اللَّیْلُ وَ النَّهارُ وَ لاجَعَلَهُ اللَّهُ آخِرَ الْعَهْدِ مِنّی لِزِیارَتِکُمْ',
            'اَلسَّلامُ عَلَی الْحُسَیْنِ وَ عَلی عَلِیِّ بْنِ الْحُسَیْنِ وَ عَلی اَوْلادِ الْحُسَیْنِ وَ عَلی اَصْحابِ الْحُسَیْنِ',
            'پس می گوئی :',
            'اَللّهُمَّ خُصَّ اَنْتَ اَوَّلَ ظالِمٍ بِاللَّعْنِ مِنّی وَ ابْدَاءْ بِهِ اَوَّلاً ثُمَّ (الْعَنِ) الثَّانِیَ وَالثّالِثَ وَ الرّابِعَ',
            'اَللّهُمَّ الْعَنْ یَزیدَ خامِساً وَ الْعَنْ عُبَیْدَ اللَّهِ بْنَ زِیادٍ وَ ابْنَ مَرْجانَةَ وَ عُمَرَ بْنَ سَعْدٍ وَ شِمْراً وَ آلَ اَبی سُفْیانَ وَ آلَ زِیادٍ وَ آلَ مَرْوانَ اِلی یَوْمِ الْقِیمَةِ',
            'پس به سجده می روی و می گوئی :',
            'اَللّهُمَّ لَکَ الْحَمْدُ حَمْدَ الشّاکِرینَ لَکَ عَلی مُصابِهِمْ اَلْحَمْدُ لِلَّهِ عَلی عَظیمِ رَزِیَّتی',
            'اَللّهُمَّ ارْزُقْنی شَفاعَةَ الْحُسَیْنِ یَوْمَ الْوُرُودِ وَ ثَبِّتْ لی قَدَمَ صِدْقٍ عِنْدَکَ مَعَ الْحُسَیْنِ وَ اَصْحابِ الْحُسَیْنِ الَّذینَ بَذَلُوا مُهَجَهُمْ دُونَ الْحُسَیْنِ عَلَیْهِ السَّلامُ',
            'برحمتك يا أرحم الراحمين وصلّى اللّه على سيّدنا و نبینا محمّد وآله الطاهرين'
        ]
    },
    {
        id: 2,
        name: 'ahd',
        content: [
            'اللّٰهُمَّ رَبَّ النُّورِ الْعَظِیمِ',
            'وَرَبَّ الْکُرْسِیِّ الرَّفِیعِ',
            'وَرَبَّ الْبَحْرِ الْمَسْجُورِ',
            'وَمُنْزِلَ التَّوْراةِ وَالْإِنْجِیلِ وَالزَّبُورِ',
            'وَرَبَّ الظِّلِّ وَالْحَرُورِ',
            'وَمُنْزِلَ الْقُرْآنِ الْعَظِیمِ',
            'وَرَبَّ الْمَلائِکَةِ الْمُقَرَّبِینَ وَالْأَنْبِیاءِ وَ الْمُرْسَلِینَ',
            'اللّٰهُمَّ إِنِّی أَسْأَلُکَ بِوَجْهِکَ الْکَرِیمِ وَبِنُورِ وَجْهِکَ الْمُنِیرِ وَمُلْکِکَ الْقَدِیمِ',
            'یَا حَیُّ یَا قَیُّومُ',
            'أَسْأَلُکَ بِاسْمِکَ الَّذِی أَشْرَقَتْ بِهِ السَّمَاواتُ وَالْأَرَضُونَ',
            'وَبِاسْمِکَ الَّذِی یَصْلَحُ بِهِ الْأَوَّلُونَ وَالْآخِرُونَ',
            'یَا حَیّاً قَبْلَ کُلِّ حَیٍّ',
            'وَیَا حَیّاً بَعْدَ کُلِّ حَیٍّ وَیَا حَیّاً حِینَ لَاحَیَّ',
            'یَا مُحْیِیَ الْمَوْتیٰ وَمُمِیتَ الْأَحْیاءِ یَا حَیُّ لَاإِلٰهَ إِلّا أَنْتَ',
            'اللّٰهُمَّ بَلِّغْ مَوْلانَا الْإِمامَ الْهادِیَ الْمَهْدِیَّ الْقائِمَ بِأَمْرِکَ صَلَواتُ اللّٰهِ عَلَیْهِ وَعَلَیٰ آبائِهِ الطَّاهِرِینَ',
            'عَنْ جَمِیعِ الْمُؤْمِنِینَ وَالْمُؤْمِناتِ فِی مَشارِقِ الْأَرْضِ وَمَغارِبِها',
            'سَهْلِها وَجَبَلِها وَبَرِّها وَبَحْرِها',
            'وَعَنِّی وَعَنْ وَالِدَیَّ مِنَ الصَّلَواتِ زِنَةَ عَرْشِ اللّٰهِ',
            'وَمِدادَ کَلِماتِهِ وَمَا أَحْصاهُ عِلْمُهُ وَأَحاطَ بِهِ کِتابُهُ',
            'اللّٰهُمَّ إِنِّی أُجَدِّدُ لَهُ فِی صَبِیحَةِ یَوْمِی هٰذَا',
            'وَمَا عِشْتُ مِنْ أَیَّامِی عَهْداً وَعَقْداً وَبَیْعَةً لَهُ فِی عُنُقِی',
            'لَا أَحُولُ عَنْها وَلَا أَزُولُ أَبَداً',
            'اللّٰهُمَّ اجْعَلْنِی مِنْ أَنْصارِهِ وَأَعْوانِهِ',
            'وَالذَّابِّینَ عَنْهُ والْمُسارِعِینَ إِلَیْهِ فِی قَضاءِ حَوَائِجِهِ',
            'وَالْمُمْتَثِلِینَ لِأَوامِرِهِ وَالْمُحامِینَ عَنْهُ',
            'وَالسَّابِقِینَ إِلیٰ إِرادَتِهِ وَالْمُسْتَشْهَدِینَ بَیْنَ یَدَیْهِ',
            'اللّٰهُمَّ إِنْ حالَ بَیْنِی وَبَیْنَهُ الْمَوْتُ الَّذِی جَعَلْتَهُ عَلَیٰ عِبادِکَ حَتْماً مَقْضِیّاً فَأَخْرِجْنِی مِنْ قَبْرِی مُؤْتَزِراً کَفَنِی',
            'شاهِراً سَیْفِی مُجَرِّداً قَناتِی مُلَبِّیاً دَعْوَةَ الدَّاعِی فِی الْحاضِرِ وَالْبادِی',
            'للّٰهُمَّ أَرِنِی الطَّلْعَةَ الرَّشِیدَةَ وَالْغُرَّةَ الْحَمِیدَةَ وَاکْحَُلْ ناظِرِی بِنَظْرَةٍ مِنِّی إِلَیْهِ',
            'وَعَجِّلْ فَرَجَهُ وَسَهِّلْ مَخْرَجَهُ وَأَوْسِعْ مَنْهَجَهُ وَاسْلُکْ بِی مَحَجَّتَهُ وَأَنْفِذْ أَمْرَهُ وَاشْدُدْ أَزْرَهُ',
            'وَاعْمُرِ اللّٰهُمَّ بِهِ بِلادَکَ وَأَحْیِ بِهِ عِبادَکَ',
            'فَإِنَّکَ قُلْتَ وَقَوْلُکَ الْحَقُّ ظَهَرَ الْفَسٰادُ فِی الْبَرِّ وَ الْبَحْرِ بِمٰا کَسَبَتْ أَیْدِی النّٰاسِ',
            'فَأَظْهِرِ اللّٰهُمَّ لَنا وَلِیَّکَ وَابْنَ بِنْتِ نَبِیِّکَ الْمُسَمَّیٰ بِاسْمِ رَسُولِکَ',
            'حَتَّیٰ لَایَظْفَرَ بِشَیْءٍ مِنَ الْباطِلِ إِلّا مَزَّقَهُ وَیُحِقَّ الْحَقَّ وَیُحَقِّقَهُ',
            'وَاجْعَلْهُ اللّٰهُمَّ مَفْزَعاً لِمَظْلُومِ عِبادِکَ',
            'وَناصِراً لِمَنْ لَایَجِدُ لَهُ ناصِراً غَیْرَکَ',
            'وَمُجَدِّداً لِمَا عُطِّلَ مِنْ أَحْکامِ کِتابِکَ',
            'وَمُشَیِّداً لِمَا وَرَدَ مِنْ أَعْلامِ دِینِکَ وَسُنَنِ نَبِیِّکَ صَلَّی اللّٰهُ عَلَیْهِ وآلِهِ',
            'وَاجْعَلْهُ اللّٰهُمَّ مِمَّنْ حَصَّنْتَهُ مِنْ بَأْسِ الْمُعْتَدِینَ',
            'اللّٰهُمَّ وَسُرَّ نَبِیَّکَ مُحَمَّداً صَلَّی اللّٰهُ عَلَیْهِ وآلِهِ بِرُؤْیَتِهِ وَمَنْ تَبِعَهُ عَلَیٰ دَعْوَتِهِ',
            'وَارْحَمِ اسْتِکانَتَنا بَعْدَهُ',
            'اللَّهُمَّ اکْشِفْ هٰذِهِ الْغُمَّةَ عَنْ هٰذِهِ الْأُمَّةِ بِحُضُورِهِ وَعَجِّلْ لَنا ظُهُورَهُ',
            'إِنَّهُمْ یَرَوْنَهُ بَعِیداً وَنَرَاهُ قَرِیباً',
            'بِرَحْمَتِکَ یَا أَرْحَمَ الرَّاحِمِینَ',
            `آنگاه سه بار بر ران خود دست میزنى و در هر مرتبه میگویى

        الْعَجَلَ الْعَجَلَ یَا مَوْلایَ یَا صَاحِبَ الزَّمَانِ`
        ]
    },
    {
        id: 3,
        name: 'faraj',
        content: [
            'إِلٰهِى عَظُمَ الْبَلاءُ وَبَرِحَ الْخَفاءُ وَانْكَشَفَ الْغِطاءُ وَانْقَطَعَ الرَّجاءُ',
            'وَضاقَتِ الْأَرْضُ وَمُنِعَتِ السَّماءُ وَأَنْتَ الْمُسْتَعانُ وَ إِلَيْكَ الْمُشْتَكىٰ',
            'وَعَلَيْكَ الْمُعَوَّلُ فِى الشِّدَّةِ وَالرَّخاءِ',
            'اللّٰهُمَّ صَلِّ عَلىٰ مُحَمَّدٍ وَآلِ مُحَمَّدٍ أُولِى الْأَمْرِ الَّذِينَ فَرَضْتَ عَلَيْنا طاعَتَهُمْ، وَعَرَّفْتَنا بِذَلِكَ مَنْزِلَتَهُمْ',
            'فَفَرِّجْ عَنّا بِحَقِّهِمْ فَرَجاً عاجِلاً قَرِيباً كَلَمْحِ الْبَصَرِ أَوْ هُوَ أَقْرَبُ',
            'يَا مُحَمَّدُ يَا عَلِىُّ يَا عَلِىُّ يَا مُحَمَّدُ اكْفِيانِى فَإِنَّكُما كافِيانِ وَانْصُرانِى فَإِنَّكُما ناصِرانِ',
            'يَا مَوْلانا يَا صاحِبَ الزَّمانِ الْغَوْثَ الْغَوْثَ الْغَوْثَ',
            'أَدْرِكْنِى أَدْرِكْنِى أَدْرِكْنِى السَّاعَةَ السَّاعَةَ السّاعَةَ',
            `الْعَجَلَ الْعَجَلَ الْعَجَلَ

        يَا أَرْحَمَ الرَّاحِمِينَ بِحَقِّ مُحَمَّدٍ وَآلِهِ الطَّاهِرِينَ`
        ]
    },
    {
        id: 4,
        name: 'ayat-alkorsi',
        content: [
            'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ (٢٥٥)',
            'لَا إِكْرَاهَ فِي الدِّينِ ۖ قَدْ تَبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ ۚ فَمَنْ يَكْفُرْ بِالطَّاغُوتِ وَيُؤْمِنْ بِاللَّهِ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقَىٰ لَا انْفِصَامَ لَهَا ۗ وَاللَّهُ سَمِيعٌ عَلِيمٌ(٢٥٦)',
            'اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا يُخْرِجُهُمْ مِنَ الظُّلُمَاتِ إِلَى النُّورِ ۖ وَالَّذِينَ كَفَرُوا أَوْلِيَاؤُهُمُ الطَّاغُوتُ يُخْرِجُونَهُمْ مِنَ النُّورِ إِلَى الظُّلُمَاتِ ۗ أُولَٰئِكَ أَصْحَابُ النَّارِ ۖ هُمْ فِيهَا خَالِدُونَ (٢٥٧)',
            'صَدَقَ اللَّهُ الْعَلِيُّ الْعَظِيم'
        ]
    },
]

const htmlElem = $.documentElement
const fontSize = $.getElementById("fontSize")
const darkMode = $.querySelector(".dark-mode")
const showBox = $.querySelector(".show-box")
const sectionsBtn = $.querySelectorAll(".section")
const developerBtn = $.querySelector(".developer")
const contentBox = $.querySelector('.content-box')
const backBtn = $.querySelector(".back")

let size;

function resizeFont() {
    size = fontSize.value
    htmlElem.style.fontSize = `${size}px`
}

function modeSelection() {
    darkMode.classList.toggle('dark-mode--dark')
    htmlElem.classList.toggle('dark')
}

function boxViewer() {
    showBox.parentElement.classList.toggle('inputs-box--open')
}

function sectionSelect(e) {
    contentBox.innerHTML = ''
    htmlElem.classList.add('true')

    let findContent = contentArray.find(contentName => {
        return contentName.name == e.target.dataset.rphrens
    })

    let title = $.createElement("h1")
    title.setAttribute("class", "title")
    title.innerText = 'بسم الله الرحمن الرحیم'

    let fragment = $.createDocumentFragment()
    let textBox
    let line

    findContent.content.forEach(content => {
        textBox = $.createElement("p")
        textBox.setAttribute("class", "text")
        textBox.innerText = content

        line = $.createElement("img")
        line.setAttribute("class", "line")
        line.setAttribute("src", "./images/Untitled-1.png")

        fragment.append(line, textBox)
    })

    contentBox.append(title, fragment)
}

function developerFunc() {
    contentBox.innerHTML = ''
    htmlElem.classList.add('true')
    contentBox.insertAdjacentHTML("beforeend", `
    <h1 class="title">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</h1>

    <p class="developer-name">سازنده : جاسم کیمیایی</p>
    
    <strong class="hadis">قال رسول الله (ص) : اُطْلُبُوا الْعِلْمَ وَ لَوْ بِالصِّین </strong>
    `)
}

function backHome () {
    htmlElem.classList.remove("true")
    contentBox.innerHTML = ''
}


fontSize.addEventListener('input', resizeFont)
darkMode.addEventListener('click', modeSelection)
showBox.addEventListener('click', boxViewer)
sectionsBtn.forEach(section => {
    section.addEventListener('click', sectionSelect)
})
developerBtn.addEventListener('click', developerFunc)
backBtn.addEventListener('click', backHome)