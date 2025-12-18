INSERT INTO cuisine (type) VALUES ('Japanese');
INSERT INTO cuisine (type) VALUES ('Spanish');
INSERT INTO cuisine (type) VALUES ('Western');
INSERT INTO cuisine (type) VALUES ('Chinese');
INSERT INTO cuisine (type) VALUES ('Korean');

/* https://www.chope.co/singapore-restaurants/restaurant/en-sushi?adults=2&time=5%3A00+pm&date=2025-12-13 */
INSERT INTO restaurant (name, email, phone, intro, description, capacity, street_address1, street_address2, unit_number, postal_code, date_created) VALUES ('En Sushi', 'enquiries@ensushisg.com', '+65 6259 8548', 'An extensive menu built on authenticity, artisanship and omotenashi hospitality.', 'En Sushi 恩鮨 reflects a divine gratification deeply inspired by the authenticity, artisanship and omotenashi hospitality that we deliver to our guests here at Middle Road, Bugis, Singapore. Taking on a trendy approach to contemporary Japanese dining, En Sushi 恩鮨 features an extensive menu of Sushi, Sashimi, Donburi, Maki, Hand Rolls and Yaki (Grill) - a sumptuous repast of authentic Japanese delights that are incredibly value for money.', 120, '112 Middle Road', 'Midland House', '#01-00B', '188970', '2025-01-15');
/* https://www.chope.co/singapore-restaurants/restaurant/uya-unagi?source=chope.com.sg&adults=2&time=5%3A00+pm&date=2025-12-13 */
INSERT INTO restaurant (name, email, phone, intro, description, capacity, street_address1, street_address2, unit_number, postal_code, date_created) VALUES ('UYA Unagi', 'enquiries@uyaunagisg.com', '+65 9359 0423', 'Eel-lovers will love the sauce, made from a highly treasured secret recipe.', 'UYA 炭焼活鰻料理 Introducing UYA 炭焼活鰻料理, a specialty eel Japanese restaurant that offers farm-to-table authentic Kansai-style live eel cuisine, grilled to perfection over traditional binchotan charcoal. Indulge in our signature dish, Hitsumabushi, and savour the tantalising flavours of our grilled live eel dishes.', 78, '501 Orchard Road', 'Wheelock Place', '#02-15', '238880', '2025-02-28');
/* https://www.chope.co/singapore-restaurants/restaurant/tapasu-oyster-gastro-bar?adults=2&time=5%3A00+pm&date=2025-12-13 */;
INSERT INTO restaurant (name, email, phone, intro, description, capacity, street_address1, street_address2, unit_number, postal_code, date_created) VALUES ('TAPASU Oyster Gastro Bar', 'enquiries@tapasusg.com', '+65 8299 2101', 'Tapas & sharing plates in a convivial and communal ambience of a gastro bar. All dishes are curated with the finest ingredients from Japan.', 'Tapasu which is the Japanese name in Katakana for Tapas, that takes the Spanish Tapas culinary experience but with authentic modern Japanese cuisine. However, make no mistake, it is not fusion, it is not your typical Izakaya, it is not Omakase, but Tapas small plates & sharing plates in a convivial and communal ambience of a gastro bar. All dishes are curated with the finest ingredients from Japan, both meats, seafood and other delicacies, and with a special focus on Japanese oysters, fresh and cooked many ways. And apart from our hand-picked selection of wines, sake and whiskies, our in-house mixologist will have an array of cocktails and mocktails for you to savour, and find your favorites.', 140, '29 Stanley Street', null, '#01-01', '068738', '2025-03-04');
/* https://www.chope.co/singapore-restaurants/restaurant/waa-cow-marina-one?adults=2&time=5%3A00+pm&date=2025-12-13 */;
INSERT INTO restaurant (name, email, phone, intro, description, capacity, street_address1, street_address2, unit_number, postal_code, date_created) VALUES ('Waa Cow!', 'enquiries@waacow.com', '+65 8223 0550', 'Enjoy premium cuts & sushi, from Aburi Wagyu Beef to Mentaiko Salmon Don.', 'This humble eatery started out with just one outlet in the National University of Singapore, but quickly gained popularity for their delicious dishes made with the finest ingredients. This restaurant only serves premium cuts, such as the Australian Tajima Wagyu, which has a marbling score of 9, and beef from America’s Snake River Farms.', 60, '5 Straits View', 'Marina One', '#01-09', '018935', '2025-06-01');
/* https://www.chope.co/singapore-restaurants/restaurant/qinghe-charcoal-bbq?source=chope.com.sg */;
INSERT INTO restaurant (name, email, phone, intro, description, capacity, street_address1, street_address2, unit_number, postal_code, date_created) VALUES ('QingHe Charcoal BBQ', 'enquiries@qinghesg.com', '+65 6592 9980', 'Liaoning-style restaurant known for its aromatic charcoal-grilled meats, signature dipping sauce, and popular hand-sliced lamb and cold noodles.', 'Qinghe Charcoal BBQ originally from Liaoning province in China that features a unique dipping sauce that enhances the aroma of the charcoal-grilled meat. To ensure the quality and freshness of the dish, Qinghe uses only the finest ingredients. In addition to the acclaimed charcoal-grilled meat, The restaurant also offers a well-received cold noodles and pickled vegetables. Their classic beef and hand-sliced lamb are particularly popular.', 80, '80 Club Street', null, null, '069448', '2025-06-05');
/* https://www.chope.co/singapore-restaurants/restaurant/viva-lavender?source=chope.com.sg */
INSERT INTO restaurant (name, email, phone, intro, description, capacity, street_address1, street_address2, unit_number, postal_code, date_created) VALUES ('Viva Lavender', 'enquiry@vivalavender.sg', '+65 6970 6685', 'Modern european cuisine with a distinctive Asian twist at exceptional value.', 'Tested, Tasted, Perfected! The menu was crafted by Colin Peh, Head Chef of Viva Lavender who was trained in a Michelin-starred kitchen during his early days of becoming a chef. Together with his team, he spent months experimenting with ingredients, techniques, and pairings to create a menu that feels both elevated and approachable. Drawing inspiration from its most-loved flavours and an understanding of their guests palates, the Viva Lavender team has thoughtfully crafted a fusion-inspired menu that honours its signature dishes while introducing bold techniques and exciting flavours to create a truly memorable dining experience.', '130', '161 Lavender Street', 'Hafary House', '#01-02/03/04', '338750', '2025-09-12');

INSERT INTO restaurant_cuisine (rt_id, cs_id) VALUES (1, 1);
INSERT INTO restaurant_cuisine (rt_id, cs_id) VALUES (2, 1);
INSERT INTO restaurant_cuisine (rt_id, cs_id) VALUES (3, 1);
INSERT INTO restaurant_cuisine (rt_id, cs_id) VALUES (3, 2);
INSERT INTO restaurant_cuisine (rt_id, cs_id) VALUES (4, 1);
INSERT INTO restaurant_cuisine (rt_id, cs_id) VALUES (4, 3);
INSERT INTO restaurant_cuisine (rt_id, cs_id) VALUES (5, 1);
INSERT INTO restaurant_cuisine (rt_id, cs_id) VALUES (5, 4);
INSERT INTO restaurant_cuisine (rt_id, cs_id) VALUES (5, 5);
INSERT INTO restaurant_cuisine (rt_id, cs_id) VALUES (6, 2);
INSERT INTO restaurant_cuisine (rt_id, cs_id) VALUES (6, 3);

INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('MON', 1, 11, 22);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('TUE', 1, 11, 22);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('WED', 1, 11, 22);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('THU', 1, 11, 22);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('FRI', 1, 11, 23);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('SAT', 1, 11, 23);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('SUN', 1, 11, 22);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('MON', 2, 12, 21);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('TUE', 2, 12, 21);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('WED', 2, 12, 21);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('THU', 2, 12, 21);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('FRI', 2, 12, 22);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('SAT', 2, 12, 22);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('SUN', 2, 12, 21);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('MON', 3, 12, 00);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('TUE', 3, 12, 00);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('WED', 3, 12, 00);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('THU', 3, 12, 00);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('FRI', 3, 12, 00);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('SAT', 3, 17, 00);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('MON', 4, 11, 21);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('TUE', 4, 11, 21);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('WED', 4, 11, 21);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('THU', 4, 11, 21);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('FRI', 4, 11, 21);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('SAT', 4, 12, 21);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('SUN', 4, 12, 21);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('MON', 5, 11, 00);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('TUE', 5, 11, 00);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('WED', 5, 11, 00);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('THU', 5, 11, 00);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('FRI', 5, 11, 00);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('SAT', 5, 11, 00);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('SUN', 5, 11, 00);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('MON', 6, 11, 22);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('TUE', 6, 11, 22);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('WED', 6, 11, 22);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('THU', 6, 11, 22);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('FRI', 6, 11, 22);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('SAT', 6, 11, 22);
INSERT INTO operation (day, rt_id, opening_time, closing_time) VALUES ('SUN', 6, 11, 22);

INSERT INTO restaurant_menu (image_url, file_url, type, rt_id) VALUES ('https://static.chope.co/uploads/2024/05/p-1x0x0x85_1716521209_58772.pdf?date=20250503', 'https://static.chope.co/uploads/2024/05/1716521209_58772.pdf', null, 1);
INSERT INTO restaurant_menu (image_url, file_url, type, rt_id) VALUES ('https://static.chope.co/uploads/2025/08/p-1x0x0x85_UYA-Menu-Aug-2025_FAWebsite_compressed_11zon-1755572259.pdf?date=20250503', 'https://static.chope.co/uploads/2025/08/UYA-Menu-Aug-2025_FAWebsite_compressed_11zon-1755572259.pdf', null, 2);
INSERT INTO restaurant_menu (image_url, file_url, type, rt_id) VALUES ('https://static.chope.co/uploads/2025/04/p-1x0x0x85_TAPASU-Oyster-Gastro-Bar-Set-Lunch-Menu-1-1745306526.pdf?date=20250503', 'https://static.chope.co/uploads/2025/04/TAPASU-Oyster-Gastro-Bar-Set-Lunch-Menu-1-1745306526.pdf', 'Executive Set Lunch Menu ($48)', 3);
INSERT INTO restaurant_menu (image_url, file_url, type, rt_id) VALUES ('https://static.chope.co/uploads/2025/04/p-1x0x0x85_TAPASU-Oyster-Gastro-Bar-Set-Lunch-Menu-1745306527.pdf?date=20250503', 'https://static.chope.co/uploads/2025/04/TAPASU-Oyster-Gastro-Bar-Set-Lunch-Menu-1745306527.pdf', 'Executive Set Lunch Menu ($68)', 3);
INSERT INTO restaurant_menu (image_url, file_url, type, rt_id) VALUES ('https://static.chope.co/uploads/2024/05/p-1x0x0x85_1717054405_51704.pdf?date=20250503', 'https://static.chope.co/uploads/2024/05/1717054405_51704.pdf', 'A La Carte', 3);
INSERT INTO restaurant_menu (image_url, file_url, type, rt_id) VALUES ('https://www.waacow.sg/cdn/shop/files/Optimised_1080x.jpg?v=1627995218', 'https://www.waacow.sg/', null, 4);
INSERT INTO restaurant_menu (image_url, file_url, type, rt_id) VALUES ('https://qul.imgix.net/d1939625-e65f-477c-a259-e9e7b43d2deb/750177_sld.jpg?auto=format&w=954', 'https://quandoo-assets-partner.s3-eu-west-1.amazonaws.com/partner/uploads/d1939625-e65f-477c-a259-e9e7b43d2deb/MD-document-160a3574-ffdf-4af7-a8bb-f53092d0e6f1.pdf', null, 5);
INSERT INTO restaurant_menu (image_url, file_url, type, rt_id) VALUES ('https://static.chope.co/uploads/2025/09/p-1x0x0x85_A-La-Carte-Menu-1757643822.pdf?date=20250503', 'https://static.chope.co/uploads/2025/09/A-La-Carte-Menu-1757643822.pdf', 'A La Carte', 6);
INSERT INTO restaurant_menu (image_url, file_url, type, rt_id) VALUES ('https://static.chope.co/uploads/2025/09/p-1x0x0x85_Beverage-Menu-1757643822.pdf?date=20250503', 'https://static.chope.co/uploads/2025/09/Beverage-Menu-1757643822.pdf', 'Drinks', 6);

INSERT INTO image_type (type) VALUES ('cover');
INSERT INTO image_type (type) VALUES ('others');

INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2023/05/s-700x350x70xw_1683106813_85805.jpg?date=20251202', 1, 1);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2023/05/s-700x350x80xw_1683106812_81434.jpg?date=20251202', 1, 2);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2023/05/s-700x350x80xw_1683106812_65627.jpg?date=20251202', 1, 2);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2023/05/s-700x350x80xw_1683106813_63928.jpg?date=20251202', 1, 2);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2023/05/s-700x350x80xw_1683106813_46633.jpg?date=20251202', 1, 2);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2018/08/s-700x350x70xw_SG_Uya_Hitsumabushi_Large_jpg_1534425071.jpg?date=20251202', 2, 1);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2018/08/s-700x350x80xw_SG_Uya_Healthy_Unajyu_jpg_1534425071.jpg?date=20251202', 2, 2);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2018/08/s-700x350x80xw_SG_Uya_Eel_on_Grill_jpg_1534425071.jpg?date=20251202', 2, 2);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2018/08/s-700x350x80xw_SG_Uya_Facade_jpg_1534425071.jpg?date=20251202', 2, 2);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2024/03/s-700x350x70xw_1709546920_63829.jpg?date=20251202', 3, 1);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2024/03/s-296x148x80xo_1709546921_43382.jpg', 3, 2);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2024/03/s-296x148x80xo_1709546922_19560.jpg', 3, 2);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2024/03/s-700x350x80xw_1709546922_38629.jpg?date=20251202', 3, 2);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2024/03/s-296x148x80xo_1709546921_23343.jpg', 3, 2);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2024/03/s-700x350x80xw_1709546922_70300.jpg?date=20251202', 3, 2);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2018/11/s-700x350x70xw__EditeSG_Waa_Cow_Signature_Abu_1542202576.jpg?date=20251202', 4, 1);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2018/11/s-700x350x80xw_SG_Waa_Cow_Signature_Aburi_Wag_1542202576.jpg?date=20251202', 4, 2);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2025/07/s-700x350x70xw_1ce30ceb-0777-4ccb-bb97-ff98f9a04509-1753680755.jpg?date=20251202', 5, 1);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2025/07/s-700x350x80xw_425983e7-1d26-4b45-9749-fc7871d329eb-1753680755.jpg?date=20251202', 5, 2);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2025/07/s-296x148x80xo_6786dfdd-d353-43e5-8bea-0bf1000e0082-1753680755.jpg', 5, 2);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2025/07/s-700x350x80xw_28023b25-aa07-45ae-bf60-6b95d746ce32-1753680756.jpg?date=20251202', 5, 2);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2025/07/s-700x350x80xw_caa109bb-1f6c-4d44-82f4-7e0c04899c26-1753680756.jpg?date=20251202', 5, 2);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2025/09/s-700x350x80xw_Group-Photo-1-1757643906.jpg?date=20251202', 6, 1);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2025/09/s-700x350x80xw_Charred-Cabbage-1-1757643905.jpg?date=20251202', 6, 2);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2025/09/s-700x350x80xw_Dry-aged-French-Lemon-Sole-1-1757643905.jpg?date=20251202', 6, 2);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2025/09/s-700x350x80xw_Garlic-Prawns-1-1757643906.jpg?date=20251202', 6, 2);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2025/09/s-700x350x80xw_Interior-1-1757643906.jpg?date=20251202', 6, 2);
INSERT INTO restaurant_image (image_url, rt_id, it_id) VALUES ('https://static.chope.co/uploads/2025/09/s-700x350x80xw_Interior-2-1-1757643906.jpg?date=20251202', 6, 2);

INSERT INTO customer (name, phone, email, password) VALUES ('Angel', '+65 9456 8273', 'angel00@gmail.com', 'ILoveToEat1');
INSERT INTO customer (name, phone, email, password) VALUES ('Bentley', '+65 8111 5678', 'bentley_vroom@gmail.com', 'ILoveToEat2');
INSERT INTO customer (name, phone, email, password) VALUES ('Chloe', '+65 8434 2121', 'chloe88@gmail.com', 'ILoveToEat3');

INSERT INTO status (type) VALUES ('active');
INSERT INTO status (type) VALUES ('attended');
INSERT INTO status (type) VALUES ('canceled');

INSERT INTO reservation (pax, date, time, rt_id, c_id, s_id) VALUES (4, '2025-09-13', 19, 2, 1, 2);
INSERT INTO reservation (pax, date, time, rt_id, c_id, s_id) VALUES (4, '2025-10-03', 20, 3, 1, 2);
INSERT INTO reservation (pax, date, time, rt_id, c_id, s_id) VALUES (6, '2025-12-24', 19, 4, 1, 1);
INSERT INTO reservation (pax, date, time, rt_id, c_id, s_id) VALUES (5, '2025-12-27', 19, 6, 1, 1);
INSERT INTO reservation (pax, date, time, rt_id, c_id, s_id) VALUES (2, '2025-11-30', 18, 1, 1, 3);
INSERT INTO reservation (pax, date, time, rt_id, c_id, s_id) VALUES (75, '2025-12-24', 19, 5, 2, 1);