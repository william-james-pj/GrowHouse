import React, { useState, useRef } from "react";
import { FlatList } from "react-native";

import Modal from "react-native-modal";
import uuid from "react-native-uuid";

import { useOpenModalAdd } from "../../../hooks/useOpenModalAdd";
import { useDiscover } from "../../../hooks/useDiscover";
import { useMyPlants } from "../../../hooks/useMyPlants";

import { TextInput } from "../../../components/TextInput";
import { CardAdd } from "./CardAdd";

import { DiscoverType } from "../../../@types/types";

import * as S from "./styles";

export type ItemSelected = {
  id: string;
  name: string;
  imgUrl: string;
};

export function ModalAdd() {
  const { addNewPlat, sensorCode } = useMyPlants();
  const { isOpen, openModal } = useOpenModalAdd();
  const { discoverData } = useDiscover();
  const [surname, setSurname] = useState("");
  const [selectedItem, setSelectedItem] = useState<ItemSelected>();

  const flatList = useRef<FlatList<DiscoverType>>(null);

  const selectItem = (itemSelected: ItemSelected) => {
    setSelectedItem(itemSelected);
  };

  const renderRows = ({ item }: { item: DiscoverType }) => {
    return (
      <CardAdd
        discoverItem={item}
        selectItem={selectItem}
        isSelected={item.id == selectedItem?.id}
      />
    );
  };

  const closeModal = () => {
    openModal(false);
  };

  const addItem = async () => {
    if (sensorCode === null) return;

    if (selectedItem === undefined || !surname.trim().length) return;

    await addNewPlat({
      id: `${uuid.v4()}`,
      name: selectedItem.name,
      surname: surname,
      imageUrl: selectedItem.imgUrl,
      plantId: selectedItem.name,
      sensorId: sensorCode,
    });

    setSelectedItem(undefined);
    setSurname("");
    closeModal();
  };

  return (
    <Modal
      isVisible={isOpen}
      onBackdropPress={() => closeModal()}
      useNativeDriverForBackdrop
      swipeDirection={"down"}
    >
      <S.Wrapper>
        <S.Modal>
          <S.Title>Adicione sua nova planta</S.Title>
          <TextInput
            placeholder={"Apelido"}
            onChangeText={setSurname}
            value={surname}
          />
          <S.Text>Selecione a nova planta</S.Text>

          <FlatList
            horizontal={true}
            ref={flatList}
            removeClippedSubviews={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 25 }}
            data={discoverData}
            extraData={selectedItem}
            renderItem={renderRows}
            keyExtractor={(item) => `add_${item.id}`}
            ItemSeparatorComponent={() => <S.Separator></S.Separator>}
            ListFooterComponent={() => <S.FooterView></S.FooterView>}
            // ListEmptyComponent={}
          />

          <S.ButtonAdd onPress={addItem}>
            <S.TextAdd>ADICIONAR</S.TextAdd>
          </S.ButtonAdd>
        </S.Modal>
      </S.Wrapper>
    </Modal>
  );
}
